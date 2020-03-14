import React, { useState, useContext, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '@providers';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { LoadingScreen } from '@components';

interface AppNavigatorProps {}

export const AppNavigator: React.FC<AppNavigatorProps> = ({}) => {
	const { auth, checkAuth } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		checkAuth().then(check => {
			setLoading(false);
		});
	}, []);

	if (loading) {
		<LoadingScreen />;
	}

	return (
		<NavigationContainer>
			{auth !== null ? <AppStack /> : <AuthStack />}
		</NavigationContainer>
	);
};
export default AppNavigator;
