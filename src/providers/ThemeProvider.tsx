import React from 'react';
import { AsyncStorage } from 'react-native';

export declare type ThemeMode = 'light' | 'dark';

const DEFAULT_THEME: ThemeMode = 'light';

export const ThemeContext = React.createContext<{
	themeMode: ThemeMode;
	switchTheme: (newTheme: ThemeMode) => void;
}>({ themeMode: DEFAULT_THEME, switchTheme: () => {} });

interface ThemeProviderProps {}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [themeMode, setThemeMode] = React.useState<ThemeMode>(DEFAULT_THEME);

	const loadTheme = async () => {
		const savedThemeMode =
			(await AsyncStorage.getItem('@KEY_THEME')) || DEFAULT_THEME;

		setThemeMode(savedThemeMode as ThemeMode);
	};

	const switchTheme = async (newThemeMode: ThemeMode) => {
		await AsyncStorage.setItem('@KEY_THEME', newThemeMode);
		setThemeMode(newThemeMode);
	};

	const themeContext = React.useMemo(() => ({ themeMode, switchTheme }), [
		themeMode,
	]);

	React.useEffect(() => {
		loadTheme();
	}, []);

	return (
		<ThemeContext.Provider value={themeContext}>
			{children}
		</ThemeContext.Provider>
	);
};
