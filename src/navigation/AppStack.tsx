import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LocalizationContext } from '@providers';
import { Ionicons } from '@expo/vector-icons';

import { AppParamList } from './params/AppParamList';
import { HomeStack } from './HomeStack';
import { SearchStack } from './SearchStack';
import { SettingsStack } from './SettingsStack';
import { useTheme } from 'react-native-paper';

interface AppStackProps {}

const Tab = createBottomTabNavigator<AppParamList>();

export const AppStack: React.FC<AppStackProps> = ({}) => {
	const { t } = React.useContext(LocalizationContext);
	const paperTheme = useTheme();

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = 'ios-home';
					} else if (route.name === 'Search') {
						iconName = 'ios-search';
					} else if (route.name === 'Settings') {
						iconName = 'ios-settings';
					}

					// You can return any component that you like here!
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
			})}
			tabBarOptions={{
				style: { backgroundColor: paperTheme.colors.surface },
				tabStyle: { backgroundColor: paperTheme.colors.surface },
				activeTintColor: paperTheme.colors.primary,
				inactiveTintColor: paperTheme.colors.disabled,
			}}
		>
			<Tab.Screen
				name='Home'
				component={HomeStack}
				options={{ title: t('Home'), headerShown: false }}
			/>
			<Tab.Screen
				name='Search'
				component={SearchStack}
				options={{ title: t('Search'), headerShown: false }}
			/>
			<Tab.Screen
				name='Settings'
				component={SettingsStack}
				options={{ title: t('Settings'), headerShown: false }}
			/>
		</Tab.Navigator>
	);
};

export { AppParamList };
