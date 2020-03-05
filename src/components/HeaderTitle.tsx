import React from "react";
import { Appbar, withTheme, Theme } from "react-native-paper";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

interface Props {
  title: any;
  color?: string;
  titleStyle?: StyleProp<TextStyle>;

  onPress?: () => void;
  style?: StyleProp<ViewStyle>[];
  theme?: Theme;
}

const HeaderTitle: React.FC<Props> = ({ theme, onPress, style, ...rest }) => {
  return (
    <Appbar.Content
      {...rest}
      color={theme.colors.primary}
      style={style}
      onPress={onPress}
    />
  );
};

export default withTheme(HeaderTitle);
