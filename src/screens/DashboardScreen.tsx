import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Avatar, Button, Card, withTheme } from "react-native-paper";
import { LocalizationContext } from "../providers/LocalizationProvider";
import { AuthContext } from "../providers/AuthProvider";
import { HomeNavProps } from "../navigation/params/HomeParamList";

import { Card as CustomCard } from "../components/Card";

interface DashboardScreenProps {}

const DashboardScreen: React.FC<DashboardScreenProps> = ({
  navigation,
  theme
}: HomeNavProps<"Dashboard">) => {
  const { locale, t, updateLocale } = React.useContext(LocalizationContext);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <View style={{ flex: 1, marginHorizontal: 24 }}>
        <View style={{ height: 16 }} />

        <CustomCard>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </CustomCard>

        <View style={{ height: 16 }} />

        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>

        <Button
          icon="camera"
          mode="text"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
        <View style={{ height: 16 }} />

        <Button
          icon="camera"
          mode="outlined"
          compact
          loading
          onPress={() => console.log("Outlined Pressed")}
        >
          Press me
        </Button>
      </View>
    </View>
  );
};

export default withTheme(DashboardScreen);
