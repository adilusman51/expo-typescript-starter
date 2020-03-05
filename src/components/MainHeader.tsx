import React from "react";
import { Appbar, useTheme, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { Route } from "@react-navigation/native";
import { Scene } from "@react-navigation/stack/lib/typescript/src/types";

interface MainHeaderProps {
  scene: Scene<Route<string>>;
  previous: Scene<Route<string>>;
  navigation: StackNavigationProp<Record<string, object>, string>;
}

export const MainHeader = ({
  scene,
  previous,
  navigation
}: MainHeaderProps) => {
  const paperTheme = useTheme();
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header
      theme={{ colors: { primary: paperTheme.colors.surface } }}
      style={{ elevation: 0 }}
    >
      {previous ? (
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
          color={paperTheme.colors.primary}
        />
      ) : (
        <TouchableOpacity
          style={{ paddingLeft: 16 }}
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
          <Avatar.Icon
            size={32}
            icon={"amazon"}
            color={paperTheme.colors.primary}
            style={{ backgroundColor: paperTheme.colors.surface }}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        // title={
        //   previous ? title : <MaterialCommunityIcons name="twitter" size={40} />
        // }
        title={title}
        color={paperTheme.colors.primary}
      />
    </Appbar.Header>
  );
};
