import React from "react";
import { AuthProvider } from "./AuthProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppTheme } from "../constants/Theme";
import { LocalizationProvider } from "./LocalizationProvider";
import { Provider as PaperProvider } from "react-native-paper";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <LocalizationProvider>
          <PaperProvider theme={AppTheme}>{children}</PaperProvider>
        </LocalizationProvider>
      </SafeAreaProvider>
    </AuthProvider>
  );
};
