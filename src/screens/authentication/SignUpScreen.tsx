import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { LocalizationContext } from "../../providers/LocalizationProvider";

const SignUpScreen = () => {
  const { locale, t, updateLocale } = React.useContext(LocalizationContext);
  const changeLocalization = () => {
    updateLocale(locale == "en" ? "cn" : "en");
  };
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button onPress={changeLocalization}>Change Localization</Button>
    </View>
  );
};

export default SignUpScreen;
