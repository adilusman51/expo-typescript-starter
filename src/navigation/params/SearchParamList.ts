import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Theme } from "react-native-paper";

export type SearchParamList = {
  Search: undefined;
};

export type SearchNavProps<T extends keyof SearchParamList> = {
  navigation: StackNavigationProp<SearchParamList, T>;
  route: RouteProp<SearchParamList, T>;
  theme?: Theme;
};
