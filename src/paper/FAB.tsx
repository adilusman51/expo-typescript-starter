import React from 'react';
import { FAB as PaperFAB } from 'react-native-paper';

type PaperFABProps = React.ComponentProps<typeof PaperFAB>;

export type FABProps = PaperFABProps & { elevation?: number };

export const FAB: React.FC<FABProps> = ({
	children,
	elevation,
	style,
	theme,
	...rest
}) => {
	return (
		<PaperFAB
			style={[
				{ elevation: 4, position: 'absolute', right: 16, bottom: 16 },
				elevation && { elevation },
				style,
			]}
			theme={theme}
			small
			{...rest}
		>
			{children}
		</PaperFAB>
	);
};

export default FAB;
