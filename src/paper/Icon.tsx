import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';
import { TouchableOpacity, ViewStyle } from 'react-native';

interface FeatherIconProps {
	name: string;
	size?: number;
	color?: string;
	onPress?: () => void;
	style?: ViewStyle;
}

export const FeatherIcon: React.FC<FeatherIconProps> = ({
	name,
	size = 24,
	color,
	onPress,
	style,
}) => {
	const theme = useTheme();
	const iconColor = color || theme.colors.primary;
	return (
		<TouchableOpacity onPress={onPress} style={style}>
			<Feather name={name} size={size} color={iconColor} />
		</TouchableOpacity>
	);
};
