import React from 'react';
import { View, Image } from 'react-native';

interface LogoProps {
	size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 48 }) => {
	return (
		<View style={{ overflow: 'hidden' }}>
			<Image
				source={require('assets/icon.png')}
				style={{ width: size, height: size, overflow: 'hidden' }}
			/>
		</View>
	);
};

export default Logo;
