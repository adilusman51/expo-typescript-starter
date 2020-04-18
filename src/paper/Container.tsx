import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

type RNViewProps = React.ComponentProps<typeof View>;

export type ContainerProps = RNViewProps & { backgroundColor?: string };

export const Container: React.FC<ContainerProps> = ({
	children,
	style,
	backgroundColor,
	...rest
}) => {
	const theme = useTheme();
	return (
		<View
			{...rest}
			style={[
				{ flex: 1, backgroundColor: theme.colors.background },
				backgroundColor && { backgroundColor },
				style,
			]}
		>
			{children}
		</View>
	);
};

export default Container;
