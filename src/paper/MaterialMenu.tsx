import React from 'react';
import { Menu as PaperMenu } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import TextInput from './TextInput';

type PaperMenuProps = React.ComponentProps<typeof PaperMenu>;

export type MaterialMenuProps = PaperMenuProps & {
	value: string;
	label: string;
	onPress: () => void;
};

export const MaterialMenu: React.FC<MaterialMenuProps> = ({
	children,
	style,
	theme,
	visible,
	onDismiss,
	label,
	value,
	onPress,
	anchor,
	...rest
}) => {
	return (
		<PaperMenu
			visible={visible}
			onDismiss={onDismiss}
			anchor={
				<View>
					<TextInput
						// disabled
						label={label}
						placeholder=''
						value={value}
					/>
					<TouchableOpacity
						onPress={onPress}
						style={{
							position: 'absolute',
							backgroundColor: 'transparent',
							width: '100%',
							height: '100%',
						}}
					></TouchableOpacity>
				</View>
			}
			style={[style]}
			theme={theme}
			{...rest}
		>
			{children}
		</PaperMenu>
	);
};

export default MaterialMenu;
