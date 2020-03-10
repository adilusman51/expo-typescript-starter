import React from "react";
import { Text as PaperText } from "react-native-paper";

type PaperTextProps = React.ComponentProps<typeof PaperText>;

export type TextProps = PaperTextProps;

export const Text: React.FC<TextProps> = props => {
  return (
    <PaperText {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
};

export default Text;
