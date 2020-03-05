import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LocalizationContext } from "../providers/LocalizationProvider";

import { HomeParamList } from "./params/HomeParamList";
import DashboardScreen from "../screens/DashboardScreen";
import { MainHeader } from "../components/MainHeader";

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const { t } = React.useContext(LocalizationContext);

  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
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
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: t("Dashboard") }}
      />
    </Stack.Navigator>
  );
};
