import React from "react";
import { Appbar, withTheme, Theme } from "react-native-paper";
import { StyleProp, ViewStyle } from "react-native";

interface Props {
  icon: any;
  color?: string;
  size?: number;
  disabled?: boolean;
  accessibilityLabel?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>[];
  theme?: Theme;
}

const ActionIcon: React.FC<Props> = ({
  theme,
  icon,
  onPress,
  style,
  ...rest
}) => {
  return (
    <Appbar.Action
      {...rest}
      color={theme.colors.primary}
      style={style}
      icon={icon}
      onPress={onPress}
    />
  );
};

export default withTheme(ActionIcon);
