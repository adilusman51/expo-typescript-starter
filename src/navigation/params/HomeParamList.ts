import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Theme } from "react-native-paper";

export type HomeParamList = {
  Dashboard: undefined;
};

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
  theme?: Theme;
};
