import {
  DefaultTheme,
  configureFonts,
  Colors,
  Theme
} from "react-native-paper";
import color from "color";

const fontConfig = {
  default: {
    regular: {
      fontFamily: "sans-serif",
      fontWeight: "normal"
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontWeight: "normal"
    },
    light: {
      fontFamily: "sans-serif-light",
      fontWeight: "normal"
    },
    thin: {
      fontFamily: "sans-serif-thin",
      fontWeight: "normal"
    }
  }
};

const AppThemeLight: Theme = {
  ...DefaultTheme,
  dark: true,
  mode: "adaptive",
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.pinkA400,
    accent: Colors.pinkA400,
    background: Colors.white,
    surface: Colors.white,
    error: "#B00020",
    text: Colors.black,
    onBackground: "#000000",
    onSurface: "#000000",
    disabled: color(Colors.black)
      .alpha(0.26)
      .rgb()
      .string(),
    placeholder: color(Colors.black)
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(Colors.black)
      .alpha(0.5)
      .rgb()
      .string(),
    notification: Colors.pinkA400
  },
  fonts: configureFonts(fontConfig)
};

const AppTheme = AppThemeLight;

export { AppTheme };
