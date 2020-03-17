import React, { useContext } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import { AuthProvider } from './AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppThemeLight, AppThemeDark } from '../constants/Theme';
import { LocalizationProvider } from './LocalizationProvider';
import { ThemeProvider, ThemeContext } from './ThemeProvider';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from '@redux-store';

import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const CombinedDefaultTheme = { ...DefaultTheme, ...AppThemeLight };
const CombinedDarkTheme = { ...DarkTheme, ...AppThemeDark };

const ThemedApp = ({ children }) => {
	const { themeMode } = useContext(ThemeContext);
	return (
		<PaperProvider
			theme={
				themeMode === 'light' ? CombinedDefaultTheme : CombinedDarkTheme
			}
		>
			<View style={styles.container}>
				{Platform.OS === 'ios' && (
					<StatusBar
						barStyle={
							themeMode === 'dark'
								? 'light-content'
								: 'dark-content'
						}
					/>
				)}
				{children}
			</View>
		</PaperProvider>
	);
};

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
	return (
		<ReduxProvider store={reduxStore}>
			<ThemeProvider>
				<LocalizationProvider>
					<AuthProvider>
						<SafeAreaProvider>
							<ThemedApp children={children} />
						</SafeAreaProvider>
					</AuthProvider>
				</LocalizationProvider>
			</ThemeProvider>
		</ReduxProvider>
	);
};

export default Providers;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
