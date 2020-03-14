import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignInScreen, SignUpScreen, ForgotPasswordScreen } from '@screens';

import { LocalizationContext } from '@providers';
import { AuthParamList, AuthNavProps } from './params/AuthParamList';
import { TitleHeader } from '@components';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
	const { t } = React.useContext(LocalizationContext);

	return (
		<Stack.Navigator
			screenOptions={{
				header: ({ scene, previous, navigation }) => (
					<TitleHeader
						scene={scene}
						previous={previous}
						navigation={navigation}
					/>
				),
			}}
		>
			<Stack.Screen
				name='SignIn'
				component={SignInScreen}
				options={{ title: t('SignIn') }}
			/>
			<Stack.Screen
				name='SignUp'
				component={SignUpScreen}
				options={{ title: t('SignUp') }}
			/>
			<Stack.Screen
				name='ForgotPassword'
				component={ForgotPasswordScreen}
				options={{ title: t('ForgotPassword') }}
			/>
		</Stack.Navigator>
	);
};

export { AuthNavProps };
