import React, { useState } from "react";
import { AsyncStorage } from "react-native";

const KEY_AUTH = "KEY_AUTH";

type Auth = null | {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
};

type AuthContextType = {
  auth: Auth;
  login: () => void;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
};

const DefaultContext: AuthContextType = {
  auth: null,
  login: () => {},
  logout: () => {},
  checkAuth: () => null
};

export const AuthContext = React.createContext<AuthContextType>(DefaultContext);

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<Auth>(null);
  const login = async () => {
    const fakeAuth: Auth = {
      accessToken: "",
      refreshToken: "",
      tokenType: "bearer"
    };
    await AsyncStorage.setItem(KEY_AUTH, JSON.stringify(fakeAuth));
    setAuth(fakeAuth);
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
    <AuthContext.Provider value={{ auth, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
