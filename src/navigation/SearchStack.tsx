import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LocalizationContext } from "../providers/LocalizationProvider";

import { SearchParamList } from "./params/SearchParamList";
import SearchScreen from "../screens/SearchScreen";
import { MainHeader } from "../components/MainHeader";

interface SearchStackProps {}

const Stack = createStackNavigator<SearchParamList>();

export const SearchStack: React.FC<SearchStackProps> = ({}) => {
  const { t } = React.useContext(LocalizationContext);

  return (
    <Stack.Navigator
      initialRouteName="Search"
      headerMode="float"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <MainHeader
            scene={scene}
            previous={previous}
            navigation={navigation}
          />
        )
      }}
    >
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: t("Search") }}
      />
    </Stack.Navigator>
  );
};
