import React from 'react';
import { TextInput as PaperTextInput } from 'react-native-paper';

type PaperTextInputProps = React.ComponentProps<typeof PaperTextInput>;

export type TextInputProps = PaperTextInputProps;

export const TextInput: React.FC<TextInputProps> = ({ style, ...rest }) => {
	return (
		<PaperTextInput
			style={[{ backgroundColor: 'transparent' }, style]}
			{...rest}
		/>
	);
};

export default TextInput;
