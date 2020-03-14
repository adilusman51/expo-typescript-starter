import React, { useContext } from 'react';
import { AuthProvider } from './AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppThemeLight, AppThemeDark } from '../constants/Theme';
import { LocalizationProvider } from './LocalizationProvider';
import { ThemeProvider, ThemeContext, ThemeMode } from './ThemeProvider';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from '@redux-store';

const ThemedApp = ({ children }) => {
	const { themeMode } = useContext(ThemeContext);
	return (
		<PaperProvider
			theme={themeMode === 'light' ? AppThemeLight : AppThemeDark}
		>
			{children}
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
