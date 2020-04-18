import React from 'react';
import { useTheme } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';

type DropdownProps = React.ComponentProps<typeof Dropdown>;

export type MaterialDropDownProps = DropdownProps;

export const MaterialDropDown: React.FC<MaterialDropDownProps> = ({
	...rest
}) => {
	const theme = useTheme();
	return (
		<Dropdown
			baseColor={theme.colors.text}
			textColor={theme.colors.text}
			itemColor={theme.colors.text}
			selectedItemColor={theme.colors.primary}
			disabledItemColor={theme.colors.disabled}
			containerStyle={{ paddingHorizontal: 8 }}
			{...rest}
		></Dropdown>
	);
};

export default MaterialDropDown;
