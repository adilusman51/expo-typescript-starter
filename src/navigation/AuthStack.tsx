import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/authentication/SignInScreen";
import SignUpScreen from "../screens/authentication/SignUpScreen";
import ForgotPasswordScreen from "../screens/authentication/ForgotPasswordScreen";
import { LocalizationContext } from "../providers/LocalizationProvider";
import { AuthParamList } from "./params/AuthParamList";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  const { t } = React.useContext(LocalizationContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: t("SignIn") }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: t("SignUp") }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: t("ForgotPassword") }}
      />
    </Stack.Navigator>
  );
};
