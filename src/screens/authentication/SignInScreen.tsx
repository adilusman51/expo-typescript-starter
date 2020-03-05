import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { AuthContext } from "../../providers/AuthProvider";
import { AuthNavProps } from "../../navigation/params/AuthParamList";

const SignInScreen = ({ navigation }: AuthNavProps<"SignIn">) => {
  const { login } = useContext(AuthContext);
  const onSignIn = async () => {
    await login();
  };
  return (
    <View>
      <Text>Sign In Screen</Text>
      <Button onPress={onSignIn}>Sign In</Button>
    </View>
  );
};

export default SignInScreen;
