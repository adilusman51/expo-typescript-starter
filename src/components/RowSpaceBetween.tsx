import React from 'react';
import { View } from 'react-native';

type RNViewProps = React.ComponentProps<typeof View>;

export type RowSpaceBetweenProps = RNViewProps;

export const RowSpaceBetween: React.FC<RowSpaceBetweenProps> = ({
	children,
	style,
	...rest
}) => {
	return (
		<View
			{...rest}
			style={[
				{
					flexDirection: 'row',
					justifyContent: 'space-between',
				},
				style,
			]}
		>
			{children}
		</View>
	);
};

export default RowSpaceBetween;
