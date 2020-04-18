import React from 'react';
import {
	ActivityIndicator as PaperActivityIndicator,
	useTheme,
} from 'react-native-paper';
import { View, StyleSheet, ViewStyle, Image } from 'react-native';
import color from 'color';

type PaperActivityIndicatorProps = React.ComponentProps<
	typeof PaperActivityIndicator
>;

export type LoadingOverlayProps = PaperActivityIndicatorProps & {
	visible: boolean;
};

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
	visible,
	...rest
}) => {
	const theme = useTheme();
	if (visible) {
		return (
			<View
				style={[
					StyleSheet.absoluteFillObject,
					{
						alignContent: 'center',
						justifyContent: 'center',
						backgroundColor: color(theme.colors.background)
							.alpha(0.5)
							.rgb()
							.string(),
					},
				]}
			>
				<View
					style={{
						overflow: 'hidden',
						alignSelf: 'center',
						marginBottom: 16,
					}}
				>
					<Image
						source={require('assets/images/logo.png')}
						style={{ width: 64, height: 64, overflow: 'hidden' }}
					/>
				</View>
				<PaperActivityIndicator
					size={'small'}
					color={theme.colors.primary}
					{...rest}
				></PaperActivityIndicator>
			</View>
		);
	} else {
		return null;
	}
};

export default LoadingOverlay;
