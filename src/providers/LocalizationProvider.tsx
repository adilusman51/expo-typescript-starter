import React from 'react';
import { AsyncStorage } from 'react-native';
import i18n from 'i18n-js';

import { en, cn, Translation } from '@localization';

export declare type Languages = 'en' | 'cn';

const DEFAULT_LOCALE: Languages = 'en';

i18n.fallbacks = true;
i18n.translations = { en, cn };
i18n.locale = DEFAULT_LOCALE as string;

export const LocalizationContext = React.createContext<{
	locale: Languages;
	t: (scope: Translation, options?: any) => string;
	updateLocale: (newLocale: Languages) => void;
}>({ locale: DEFAULT_LOCALE, t: () => null, updateLocale: () => {} });

interface LocalizationProviderProps {}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
	children,
}) => {
	const [locale, setLocale] = React.useState<Languages>(DEFAULT_LOCALE);

	const loadLocalization = async () => {
		const savedLocale =
			(await AsyncStorage.getItem('@KEY_LOCALIZATION')) || DEFAULT_LOCALE;

		i18n.locale = savedLocale as string;
		setLocale(savedLocale as Languages);
	};

	const updateLocale = async (newLocale: Languages) => {
		await AsyncStorage.setItem('@KEY_LOCALIZATION', newLocale);
		i18n.locale = newLocale as string;
		setLocale(newLocale);
	};
	const translate = (scope, options) => i18n.t(scope, { locale, ...options });

	const localizationContext = React.useMemo(
		() => ({ locale, t: translate, updateLocale }),
		[locale]
	);

	React.useEffect(() => {
		loadLocalization();
	}, []);

	return (
		<LocalizationContext.Provider value={localizationContext}>
			{children}
		</LocalizationContext.Provider>
	);
};
