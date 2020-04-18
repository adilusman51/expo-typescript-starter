import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useTheme } from 'react-native-paper';

interface LoadingScreenProps {}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({}) => {
	const theme = useTheme();
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: theme.colors.background,
			}}
		>
			<ActivityIndicator size='large' />
		</View>
	);
};

export default LoadingScreen;
