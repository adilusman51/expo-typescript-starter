import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

type PaperButtonProps = React.ComponentProps<typeof PaperButton>;

export type ButtonProps = PaperButtonProps;

export const Button: React.FC<ButtonProps> = ({
	children,
	style,
	theme,
	...rest
}) => {
	return (
		<PaperButton style={[style]} theme={theme} {...rest}>
			{children}
		</PaperButton>
	);
};

export default Button;
