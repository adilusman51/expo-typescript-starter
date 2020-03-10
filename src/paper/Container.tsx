import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

type RNViewProps = React.ComponentProps<typeof View>;

export type ButtonProps = RNViewProps & { backgroundColor?: string };

export const Button: React.FC<ButtonProps> = ({
  children,
  style,
  backgroundColor,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <View
      {...rest}
      style={[
        { flex: 1, backgroundColor: theme.colors.background },
        backgroundColor && { backgroundColor },
        style
      ]}
    >
      {children}
    </View>
  );
};

export default Button;
