import React, { useState, useContext, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../providers/AuthProvider";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

interface AppNavigatorProps {}

export const AppNavigator: React.FC<AppNavigatorProps> = ({}) => {
  const { auth, checkAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth().then(check => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  console.log("Auth: ", auth);

  return (
    <NavigationContainer>
      {auth !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default AppNavigator;
