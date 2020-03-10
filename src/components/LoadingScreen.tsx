import React from "react";
import { View, ActivityIndicator } from "react-native";

interface LoadingScreenProps {}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};
