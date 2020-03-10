import React from "react";
import { View } from "react-native";

interface MarginProps {
  margin?: "small" | "normal" | "large" | "xlarge" | number;
}

export const Margin: React.FC<MarginProps> = ({ margin = "large" }) => {
  let size = margin;
  switch (margin) {
    case "small":
      size = 4;
      break;
    case "normal":
      size = 8;
      break;
    case "large":
      size = 16;
      break;
    case "xlarge":
      size = 24;
      break;
    default:
      break;
  }
  return <View style={{ width: size, height: size }} />;
};
