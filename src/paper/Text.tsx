import React from 'react';
import { Text as PaperText, useTheme } from 'react-native-paper';
import { TextStyle, StyleProp } from 'react-native';

type PaperTextProps = React.ComponentProps<typeof PaperText>;

export type TextProps = PaperTextProps & {
	title?: boolean;
	heading?: boolean;
	normal?: boolean;
	sectionHeading?: boolean;
	themed?: 'primary' | 'accent' | 'warning' | 'secondary';
};

export const Text: React.FC<TextProps> = props => {
	const theme = useTheme();
	let themedStyle: StyleProp<TextStyle> = null;
	if (props.themed) {
		if (props.themed === 'primary') {
			themedStyle = { color: theme.colors.primary };
		} else if (props.themed === 'accent') {
			themedStyle = { color: theme.colors.accent };
		} else if (props.themed === 'warning') {
			themedStyle = { color: 'orange' };
		} else if (props.themed === 'secondary') {
			themedStyle = { color: 'grey' };
		}
	}
	return (
		<PaperText
			{...props}
			style={[
				// { fontFamily: 'space-mono' },
				{ fontSize: 14 },
				props.title && { fontSize: 20, fontWeight: 'bold' },
				props.heading && { fontSize: 24, fontWeight: '400' },
				props.normal && { fontSize: 16 },
				props.sectionHeading && { fontSize: 14, fontWeight: '300' },
				props.style,
				props.themed && themedStyle,
			]}
		/>
	);
};

export default Text;
