import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Button, withTheme } from 'react-native-paper';
import { LocalizationContext, AuthContext, ThemeContext } from '@providers';

import { SettingsNavProps } from '@navigation';

interface SettingsScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = ({
	navigation,
	theme,
}: SettingsNavProps<'Settings'>) => {
	const { locale, t, updateLocale } = React.useContext(LocalizationContext);
	const { logout } = useContext(AuthContext);
	const { themeMode, switchTheme } = useContext(ThemeContext);

	const changeLocalization = () => {
		updateLocale(locale == 'en' ? 'cn' : 'en');
	};

	const changeTheme = () => {
		switchTheme(themeMode == 'dark' ? 'light' : 'dark');
	};

	return (
		<View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
			<View style={{ flex: 1, marginHorizontal: 24 }}>
				<View style={{ flex: 1 }} />
				<Button onPress={changeTheme}>Change Theme</Button>
				<Button onPress={changeLocalization}>
					Change Localization
				</Button>
				<Button onPress={logout}>Logout</Button>
			</View>
		</View>
	);
};

export default withTheme(SettingsScreen);
