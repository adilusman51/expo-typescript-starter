import React from 'react';
import { useTheme, Appbar as PaperAppbar } from 'react-native-paper';

import { StackNavigationProp } from '@react-navigation/stack';
import { Route } from '@react-navigation/native';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
import { FlatHeader } from '@paper';

interface TitleHeaderProps {
	scene: Scene<Route<string>>;
	previous: Scene<Route<string>>;
	navigation: StackNavigationProp<Record<string, object>, string>;
}

export const TitleHeader = ({
	scene,
	previous,
	navigation,
}: TitleHeaderProps) => {
	const paperTheme = useTheme();
	const { options } = scene.descriptor;
	const title =
		options.headerTitle !== undefined
			? options.headerTitle
			: options.title !== undefined
			? options.title
			: scene.route.name;

	return (
		<FlatHeader>
			{previous && (
				<PaperAppbar.BackAction
					onPress={() => {
						navigation.goBack();
					}}
					color={paperTheme.colors.primary}
				/>
			)}
			<PaperAppbar.Content
				// title={
				//   previous ? title : <MaterialCommunityIcons name="twitter" size={40} />
				// }
				title={title}
				color={paperTheme.colors.primary}
			/>
		</FlatHeader>
	);
};

export default TitleHeader;
