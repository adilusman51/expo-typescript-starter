import React from 'react';
import { Avatar as PaperAvatar } from 'react-native-paper';

type PaperAvatarImageProps = React.ComponentProps<typeof PaperAvatar.Image>;
type PaperAvatarTextProps = React.ComponentProps<typeof PaperAvatar.Text>;

export type AvatarProps = PaperAvatarImageProps & PaperAvatarTextProps;

export const Avatar: React.FC<AvatarProps> = ({
	children,
	style,
	theme,
	label,
	source,
	...rest
}) => {
	if (source) {
		return (
			<PaperAvatar.Image
				source={source}
				style={[style]}
				theme={theme}
				{...rest}
			>
				{children}
			</PaperAvatar.Image>
		);
	} else if (label) {
		return (
			<PaperAvatar.Text
				label={label}
				style={[style]}
				theme={theme}
				{...rest}
			>
				{children}
			</PaperAvatar.Text>
		);
	} else {
		return (
			<PaperAvatar.Image
				source={require('assets/icon.png')}
				style={[style, { backgroundColor: 'transparent' }]}
				theme={theme}
				{...rest}
			>
				{children}
			</PaperAvatar.Image>
		);
	}
};

export default Avatar;
