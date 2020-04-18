import React from 'react';

import { View } from 'react-native';
import { Card, Text } from '@paper';
import { Margin } from './Margin';
import { useTheme } from 'react-native-paper';

interface EmptyCardProps {
	message: string;
}

export const EmptyCard: React.FC<EmptyCardProps> = ({ message }) => {
	const theme = useTheme();
	const margin =
		theme.roundness >= 16 ? theme.roundness : theme.roundness * 2;
	return (
		<Card>
			<View
				style={{
					margin,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Margin />
				<Text themed='secondary'>{message}</Text>
				<Margin />
			</View>
		</Card>
	);
};

export default EmptyCard;
