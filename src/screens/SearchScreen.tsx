import React from "react";
import { View, Text } from "react-native";
import { FAB, Searchbar, withTheme } from "react-native-paper";
import { LocalizationContext } from "../providers/LocalizationProvider";

import { SearchNavProps } from "../navigation/params/SearchParamList";

interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = ({
  navigation,
  theme
}: SearchNavProps<"Search">) => {
  const { locale, t, updateLocale } = React.useContext(LocalizationContext);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <View style={{ flex: 1, marginHorizontal: 24 }}>
        <View style={{ height: 16 }} />
        <Searchbar
          placeholder="Location"
          iconColor={theme.colors.primary}
          style={{ elevation: 2 }}
          clearIcon={"close"}
        />

        <FAB
          style={{
            position: "absolute",
            marginBottom: 16,
            right: 0,
            bottom: 0
          }}
          small
          icon="plus"
          onPress={() => console.log("FAB Pressed")}
        />
      </View>
    </View>
  );
};

export default withTheme(SearchScreen);
