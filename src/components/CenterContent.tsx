import React from 'react';
import { View } from 'react-native';

type RNViewProps = React.ComponentProps<typeof View>;

export type CenterContentProps = RNViewProps;

export const CenterContent: React.FC<CenterContentProps> = ({
	children,
	style,
	...rest
}) => {
	return (
		<View
			{...rest}
			style={[
				{
					alignItems: 'center',
					justifyContent: 'center',
				},
				style,
			]}
		>
			{children}
		</View>
	);
};

export default CenterContent;
