import React, { useState, useContext } from "react";
import { View, Alert } from "react-native";
import { Button } from "react-native-paper";
import { LocalizationContext } from "../../providers/LocalizationProvider";
import { Container, Card, TextInput } from "../../paper";
import { AuthNavProps } from "../../navigation/params/AuthParamList";
import { AuthContext } from "../../providers/AuthProvider";
import { Margin } from "../../components/Margin";
import setInput from "../../utils/InputHelper";

const SignUpScreen = ({ navigation }: AuthNavProps<"SignUp">) => {
  const { signUp } = useContext(AuthContext);

  const [username, setUsername] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const [confirmPassword, setConfirmPassword] = useState<string>(null);

  const clearInputs = () => {
    setUsername(null);
    setPassword(null);
    setConfirmPassword(null);
  };

  const onSignUp = async () => {
    if (username && password && password === confirmPassword) {
      await signUp(username, password);
      clearInputs();
    } else {
      Alert.alert("Error", "Something went wrong");
    }
  };
  const onForgotPassword = async () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignIn = async () => {
    navigation.navigate("SignIn");
  };
  return (
    <Container>
      <View
        style={{
          flex: 1,
          marginHorizontal: 24,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Card style={{ width: "90%", padding: 16 }}>
          <TextInput
            label="Username"
            placeholder="username"
            value={username}
            onChange={setInput(setUsername)}
          />
          <TextInput
            label="New Password"
            placeholder="password"
            value={password}
            onChange={setInput(setPassword)}
            secureTextEntry
          />
          <TextInput
            label="Confirm Password"
            placeholder="password"
            value={confirmPassword}
            onChange={setInput(setConfirmPassword)}
            secureTextEntry
          />
          <Margin margin="xlarge" />
          <Button mode="contained" onPress={onSignUp}>
            Sign Up
          </Button>
          <Margin />
          <Button onPress={onSignIn}>Sign In</Button>
          <Button onPress={onForgotPassword}>Forgot Password?</Button>
        </Card>
      </View>
    </Container>
  );
};

export default SignUpScreen;
