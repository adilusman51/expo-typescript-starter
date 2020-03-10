import React, { useState } from "react";
import { AsyncStorage } from "react-native";

const KEY_AUTH = "KEY_AUTH";

type Auth = null | {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
};

type AuthContextType = {
  auth: Auth;
  signIn: (username: string, password: string) => void;
  signUp: (username: string, password: string) => void;
  forgotPassword: (username: string) => void;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
};

const DefaultContext: AuthContextType = {
  auth: null,
  signIn: () => {},
  signUp: () => {},
  forgotPassword: () => {},
  logout: () => {},
  checkAuth: () => null
};

export const AuthContext = React.createContext<AuthContextType>(DefaultContext);

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<Auth>(null);
  const signIn = async (username: string, password: string) => {
    const userString = await AsyncStorage.getItem(username.toLocaleLowerCase());
    if (userString) {
      const user = JSON.parse(userString);
      if (user.password === password) {
        const fakeAuth: Auth = {
          accessToken: "",
          refreshToken: "",
          tokenType: "bearer",
          expiresIn: 60 * 60 * 1
        };
        await AsyncStorage.setItem(KEY_AUTH, JSON.stringify(fakeAuth));
        setAuth(fakeAuth);
      }
    }
    throw Error("Incorrect username or password");
  };
  const signUp = async (username: string, password: string) => {
    const newUser = {
      username: username.toLocaleLowerCase(),
      password
    };
    await AsyncStorage.setItem(newUser.username, JSON.stringify(newUser));
  };

  const forgotPassword = async (username: string) => {
    const userString = await AsyncStorage.getItem(username.toLocaleLowerCase());
    if (userString) {
      const oldUser = JSON.parse(userString);
      const newUser = {
        username: oldUser.username.toLocaleLowerCase(),
        password: "123456"
      };
      await AsyncStorage.setItem(newUser.username, JSON.stringify(newUser));
    }
    throw Error("Username does not exits");
  };

  const logout = async () => {
    await AsyncStorage.removeItem(KEY_AUTH);
    setAuth(null);
  };
  const checkAuth = async () => {
    const authString = await AsyncStorage.getItem(KEY_AUTH);
    if (authString) {
      const auth = JSON.parse(authString);
      setAuth(auth);
      return true;
    } else {
      setAuth(null);
      return false;
    }
  };
  return (
    <AuthContext.Provider
      value={{ auth, signIn, signUp, forgotPassword, logout, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
