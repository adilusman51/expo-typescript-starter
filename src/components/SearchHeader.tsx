import React, { useState } from 'react';
import { useTheme, Appbar as PaperAppbar, Searchbar } from 'react-native-paper';

import { StackNavigationProp } from '@react-navigation/stack';
import { Route } from '@react-navigation/native';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
import { FlatHeader } from '@paper';
import { SearchHeaderActionParam } from '@navigation';

interface SearchHeaderProps {
	scene: Scene<Route<string>>;
	previous: Scene<Route<string>>;
	navigation: StackNavigationProp<Record<string, object>, string>;
}

export const SearchHeader = ({
	scene,
	previous,
	navigation,
}: SearchHeaderProps) => {
	const paperTheme = useTheme();
	const { options } = scene.descriptor;
	const title =
		options.headerTitle !== undefined
			? options.headerTitle
			: options.title !== undefined
			? options.title
			: scene.route.name;

	const { headerRight, headerLeft } = options;

	const routeParams = (scene.route.params as {
		searchAction?: SearchHeaderActionParam;
	}) || { searchAction: null };
	const { searchAction } = routeParams;

	const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

	const toggleSearchBar = () => {
		setShowSearchBar(showSearchBar ? false : true);
	};

	return (
		<FlatHeader>
			{previous ? (
				<PaperAppbar.BackAction
					onPress={() => {
						navigation.goBack();
					}}
					color={paperTheme.colors.primary}
				/>
			) : headerLeft ? (
				headerLeft({ tintColor: paperTheme.colors.primary })
			) : null}
			{!showSearchBar && (
				<PaperAppbar.Content
					// title={
					//   previous ? title : <MaterialCommunityIcons name="twitter" size={40} />
					// }
					title={title}
					color={paperTheme.colors.primary}
					titleStyle={{ alignSelf: 'center', textAlign: 'center' }}
				/>
			)}

			{!showSearchBar && (
				<PaperAppbar.Action
					icon={'search'}
					color={paperTheme.colors.primary}
					onPress={toggleSearchBar}
				/>
			)}

			{showSearchBar && (
				<Searchbar
					placeholder={`Search ${title}`}
					value={searchAction.query.current}
					// onChange={searchAction.onChange.current}
					onChangeText={searchAction.onChangeText.current}
					icon='search'
					iconColor={paperTheme.colors.primary}
					clearIcon='delete'
					style={{ elevation: 0 }}
					onIconPress={toggleSearchBar}
					autoCorrect={false}
				/>
			)}
			{headerRight &&
				headerRight({ tintColor: paperTheme.colors.primary })}
		</FlatHeader>
	);
};

export default SearchHeader;
