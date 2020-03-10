import React from "react";
import { TextInput as PaperTextInput } from "react-native-paper";

type PaperTextInputProps = React.ComponentProps<typeof PaperTextInput>;

export type TextInputProps = PaperTextInputProps;

export const TextInput: React.FC<TextInputProps> = props => {
  return <PaperTextInput {...props} />;
};

export default TextInput;
