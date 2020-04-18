import React, { useState } from 'react';
import { useTheme, Appbar as PaperAppbar, Searchbar } from 'react-native-paper';

import { StackNavigationProp } from '@react-navigation/stack';

import { StackHeaderLeftButtonProps } from '@react-navigation/stack/lib/typescript/src/types';
import { FlatHeader } from '@paper';

interface SearchHeaderScreenProps {
	previous?: boolean;
	title: string;
	navigation?: StackNavigationProp<Record<string, object>, string>;
	headerLeft?: (props: StackHeaderLeftButtonProps) => React.ReactNode;
	headerRight?: (props: StackHeaderLeftButtonProps) => React.ReactNode;
	onQueryChange?: (value: string) => void;
	queryValue?: string;
}

export const SearchHeaderScreen = ({
	title,
	previous = false,
	navigation,
	headerLeft,
	headerRight,
	queryValue,
	onQueryChange,
}: SearchHeaderScreenProps) => {
	const paperTheme = useTheme();

	const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

	const toggleSearchBar = () => {
		setShowSearchBar(showSearchBar ? false : true);
	};

	return (
		<FlatHeader>
			{previous ? (
				<PaperAppbar.BackAction
					onPress={() => {
						if (navigation) navigation.goBack();
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
					value={queryValue}
					// onChange={searchAction.onChange.current}
					onChangeText={onQueryChange}
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

export default SearchHeaderScreen;
