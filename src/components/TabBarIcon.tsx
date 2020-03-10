import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { withTheme } from "react-native-paper";

function TabBarIcon(props) {
  const { colors } = props.theme;
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? colors.primary : colors.focused}
    />
  );
}

export default withTheme(TabBarIcon);
