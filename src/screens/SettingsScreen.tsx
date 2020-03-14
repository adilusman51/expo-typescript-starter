import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import {
	Appbar,
	Avatar,
	Button,
	Card,
	FAB,
	Searchbar,
	withTheme,
} from 'react-native-paper';
import { LocalizationContext, AuthContext } from '@providers';

import { SettingsNavProps } from '@navigation';

interface SettingsScreenProps {}

const SettingsScreen: React.FC<SettingsScreenProps> = ({
	navigation,
	theme,
}: SettingsNavProps<'Settings'>) => {
	const { locale, t, updateLocale } = React.useContext(LocalizationContext);
	const { logout } = useContext(AuthContext);

	const changeLocalization = () => {
		updateLocale(locale == 'en' ? 'cn' : 'en');
	};

	return (
		<View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
			<View style={{ flex: 1, marginHorizontal: 24 }}>
				<View style={{ flex: 1 }} />
				<Button onPress={changeLocalization}>
					Change Localization
				</Button>
				<Button onPress={logout}>Logout</Button>
			</View>
		</View>
	);
};

export default withTheme(SettingsScreen);
