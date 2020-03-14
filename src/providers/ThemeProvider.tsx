import React from 'react';
import { AsyncStorage } from 'react-native';

export type ThemeMode = 'light' | 'dark';

const DEFAULT_THEME: string = 'light';

export const ThemeContext = React.createContext<{
	themeMode: string;
	switchTheme: (newTheme: string) => void;
}>({ themeMode: DEFAULT_THEME, switchTheme: () => {} });

interface ThemeProviderProps {}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [themeMode, setThemeMode] = React.useState<string>(DEFAULT_THEME);

	const loadTheme = async () => {
		const savedThemeMode =
			(await AsyncStorage.getItem('@KEY_THEME')) || DEFAULT_THEME;

		setThemeMode(savedThemeMode as string);
	};

	const switchTheme = async (newThemeMode: string) => {
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
