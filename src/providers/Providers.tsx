import React from 'react';
import { AuthProvider } from './AuthProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppTheme } from '../constants/Theme';
import { LocalizationProvider } from './LocalizationProvider';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from '@redux-store';

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
	return (
		<ReduxProvider store={reduxStore}>
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

export default Providers;
