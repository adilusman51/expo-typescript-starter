import {
	DefaultTheme,
	configureFonts,
	Colors,
	Theme,
	DarkTheme,
} from 'react-native-paper';
import color from 'color';
import { Fonts } from 'react-native-paper/lib/typescript/src/types';

const fontConfig: { default?: Fonts } = {
	default: {
		regular: {
			fontFamily: 'sans-serif',
			fontWeight: 'normal',
		},
		medium: {
			fontFamily: 'sans-serif-medium',
			fontWeight: 'normal',
		},
		light: {
			fontFamily: 'sans-serif-light',
			fontWeight: 'normal',
		},
		thin: {
			fontFamily: 'sans-serif-thin',
			fontWeight: 'normal',
		},
	},
};

const primaryColor = Colors.pinkA400;
const accentColor = Colors.pinkA400;

const errorColor = '#B00020';

const AppThemeLight: Theme = {
	...DefaultTheme,
	dark: true,
	mode: 'adaptive',
	roundness: 8,
	colors: {
		...DefaultTheme.colors,
		primary: primaryColor,
		accent: accentColor,
		background: Colors.white,
		surface: Colors.white,
		error: errorColor,
		text: Colors.black,
		onBackground: Colors.black,
		onSurface: Colors.black,
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
		notification: primaryColor,
	},
	fonts: configureFonts(fontConfig),
};

const AppThemeDark: Theme = {
	...DarkTheme,
	dark: true,
	mode: 'adaptive',
	roundness: 8,
	colors: {
		...DarkTheme.colors,
		primary: primaryColor,
		accent: accentColor,
		// background: Colors.white,
		// surface: Colors.white,
		error: errorColor,
		// text: Colors.white,
		// onBackground: Colors.white,
		// onSurface: Colors.white,
		// disabled: color(Colors.black)
		// 	.alpha(0.26)
		// 	.rgb()
		// 	.string(),
		// placeholder: color(Colors.black)
		// 	.alpha(0.54)
		// 	.rgb()
		// 	.string(),
		// backdrop: color(Colors.black)
		// 	.alpha(0.5)
		// 	.rgb()
		// 	.string(),
		notification: primaryColor,
	},
	fonts: configureFonts(fontConfig),
};

export { AppThemeLight, AppThemeDark };
