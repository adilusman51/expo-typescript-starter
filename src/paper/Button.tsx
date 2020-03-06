import React from "react";
import { Button as PaperButton } from "react-native-paper";

type PaperButtonProps = React.ComponentProps<typeof PaperButton>;

export type ButtonProps = PaperButtonProps & { elevation?: number };

export const Button: React.FC<ButtonProps> = ({
  children,
  elevation,
  style,
  theme,
  ...rest
}) => {
  return (
    <PaperButton
      {...rest}
      style={[{ elevation: 4 }, elevation && { elevation }, style]}
      theme={theme}
    >
      {children}
    </PaperButton>
  );
};

export default Button;
