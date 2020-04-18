import React from 'react';
import { View } from 'react-native';

type RNViewProps = React.ComponentProps<typeof View>;

export type ContentProps = RNViewProps & {
	noMargin?: boolean;
	noFlex?: boolean;
};

export const Content: React.FC<ContentProps> = ({
	noMargin,
	noFlex,
	children,
	style,
	...rest
}) => {
	return (
		<View
			{...rest}
			style={[
				!noFlex && { flex: 1 },
				!noMargin && { marginHorizontal: 24, marginTop: 16 },
				style,
			]}
		>
			{children}
		</View>
	);
};

export default Content;
