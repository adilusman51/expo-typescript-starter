import React from 'react';
import {
	useTheme,
	Avatar as PaperAvatar,
	Appbar as PaperAppbar,
} from 'react-native-paper';
import { TouchableOpacity, Platform } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { Route } from '@react-navigation/native';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
import { FlatHeader } from '@paper';

interface MainHeaderProps {
	scene: Scene<Route<string>>;
	previous: Scene<Route<string>>;
	navigation: StackNavigationProp<Record<string, object>, string>;
}

export const MainHeader = ({
	scene,
	previous,
	navigation,
}: MainHeaderProps) => {
	const paperTheme = useTheme();
	const { options } = scene.descriptor;
	const title =
		options.headerTitle !== undefined
			? options.headerTitle
			: options.title !== undefined
			? options.title
			: scene.route.name;
	const paddingHorizontal = 16;
	const iconSize = 32;
	const marginHorizontal = paddingHorizontal + iconSize;
	return (
		<FlatHeader>
			{previous ? (
				<PaperAppbar.BackAction
					onPress={() => {
						navigation.goBack();
					}}
					color={paperTheme.colors.primary}
				/>
			) : (
				<TouchableOpacity
					style={{ paddingLeft: paddingHorizontal }}
					onPress={() => {
						// navigation.openDrawer();
					}}
				>
					{/* <Avatar.Image
            size={32}
            source={{
              uri:
                "https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg"
            }}
          /> */}
					<PaperAvatar.Icon
						size={iconSize}
						icon={'menu'}
						color={paperTheme.colors.primary}
						style={{ backgroundColor: paperTheme.colors.surface }}
					/>
				</TouchableOpacity>
			)}
			<PaperAppbar.Content
				// title={
				//   previous ? title : <MaterialCommunityIcons name="twitter" size={40} />
				// }
				title={title}
				color={paperTheme.colors.primary}
				titleStyle={{ alignSelf: 'center', textAlign: 'center' }}
				style={
					Platform.OS == 'android' && {
						marginRight: marginHorizontal,
					}
				}
			/>
		</FlatHeader>
	);
};

export default MainHeader;
