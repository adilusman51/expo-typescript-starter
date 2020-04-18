import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

type PaperButtonProps = React.ComponentProps<typeof PaperButton>;

export type FlatButtonProps = PaperButtonProps;

export const FlatButton: React.FC<FlatButtonProps> = ({
	children,
	style,
	labelStyle,
	theme,
	...rest
}) => {
	return (
		<PaperButton
			style={[{ alignItems: 'flex-start' }, style]}
			labelStyle={[
				{
					alignSelf: 'flex-start',
					textAlign: 'left',
				},
				labelStyle,
			]}
			theme={theme}
			{...rest}
		>
			{children}
		</PaperButton>
	);
};

export default FlatButton;
