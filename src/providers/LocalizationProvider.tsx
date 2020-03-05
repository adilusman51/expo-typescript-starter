import React from "react";
import { AsyncStorage } from "react-native";
import i18n from "i18n-js";
import en from ".././../localization/en";
import cn from ".././../localization/cn";

const DEFAULT_LOCALE = "cn";

i18n.fallbacks = true;
i18n.translations = { en, cn };
i18n.locale = DEFAULT_LOCALE;

export const LocalizationContext = React.createContext<{
  locale: string;
  t: (scope: any, options?: any) => string;
  updateLocale: (newLocale: string) => void;
}>({ locale: DEFAULT_LOCALE, t: () => null, updateLocale: () => {} });

interface LocalizationProviderProps {}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children
}) => {
  const [locale, setLocale] = React.useState(DEFAULT_LOCALE);

  const loadLocalization = async () => {
    const savedLocale =
      (await AsyncStorage.getItem("localization")) || DEFAULT_LOCALE;

    i18n.locale = savedLocale;
    setLocale(savedLocale);
  };

  const updateLocale = async newLocale => {
    await AsyncStorage.setItem("localization", newLocale);
    i18n.locale = newLocale;
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
