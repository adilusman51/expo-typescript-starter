import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Theme } from "react-native-paper";

export type SettingsParamList = {
  Settings: undefined;
};

export type SettingsNavProps<T extends keyof SettingsParamList> = {
  navigation: StackNavigationProp<SettingsParamList, T>;
  route: RouteProp<SettingsParamList, T>;
  theme?: Theme;
};
