import React from 'react';
import {
	View,
	Image,
	TouchableOpacity,
	ImageSourcePropType,
} from 'react-native';
import { Text } from '@paper';
import Margin from './Margin';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

interface IconButtonProps {
	label: string;
	subLabel?: string;
	iconSize?: number;
	onPress?: () => void;
	icon?: ImageSourcePropType;
	iconName?: string;
	iconColor?: string;
}

const getIcon = (
	icon: ImageSourcePropType,
	iconName: string,
	iconSize: number,
	iconColor: string
) => {
	if (icon) {
		return (
			<Image
				source={icon}
				style={{ width: iconSize, height: iconSize }}
			/>
		);
	} else if (iconName) {
		return <Feather name={iconName} size={iconSize} color={iconColor} />;
	}
};

export const IconButton: React.FC<IconButtonProps> = ({
	label,
	subLabel,
	iconSize = 24,
	onPress,
	icon,
	iconName,
	iconColor,
}) => {
	const theme = useTheme();
	const color = iconColor || theme.colors.primary;
	return (
		<TouchableOpacity onPress={onPress}>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{(icon || iconName) && getIcon(icon, iconName, iconSize, color)}
				{(icon || iconName) && <Margin margin='small' />}
				<Text themed='primary'>{label}</Text>
				{subLabel && <Text style={{ fontSize: 12 }}>{subLabel}</Text>}
			</View>
		</TouchableOpacity>
	);
};

export default IconButton;
