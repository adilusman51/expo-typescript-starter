import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LocalizationContext } from '@providers';

import {
	SettingsParamList,
	SettingsNavProps,
} from './params/SettingsParamList';
import { SettingsScreen } from '@screens';
import { MainHeader } from '@components';

interface SettingsStackProps {}

const Stack = createStackNavigator<SettingsParamList>();

export const SettingsStack: React.FC<SettingsStackProps> = ({}) => {
	const { t } = React.useContext(LocalizationContext);

	return (
		<Stack.Navigator
			initialRouteName='Settings'
			headerMode='float'
			screenOptions={{
				header: ({ scene, previous, navigation }) => (
					<MainHeader
						scene={scene}
						previous={previous}
						navigation={navigation}
					/>
				),
			}}
		>
			<Stack.Screen
				name='Settings'
				component={SettingsScreen}
				options={{ title: t('Settings') }}
			/>
		</Stack.Navigator>
	);
};

export { SettingsNavProps };
