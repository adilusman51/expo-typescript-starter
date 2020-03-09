import React from 'react';
import { AuthProvider } from './AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppTheme } from '../constants/Theme';
import { LocalizationProvider } from './LocalizationProvider';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../redux/stores';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
	return (
		<ReduxProvider store={store}>
			<AuthProvider>
				<LocalizationProvider>
					<SafeAreaProvider>
						<PaperProvider theme={AppTheme}>
							{children}
						</PaperProvider>
					</SafeAreaProvider>
				</LocalizationProvider>
			</AuthProvider>
		</ReduxProvider>
	);
};
