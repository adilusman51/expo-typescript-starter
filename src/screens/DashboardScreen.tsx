import React from "react";
import { View } from "react-native";
import { Avatar, Card as PaperCard, withTheme } from "react-native-paper";
import { LocalizationContext } from "../providers/LocalizationProvider";

import { HomeNavProps } from "../navigation/params/HomeParamList";

import { Card, Button } from "../paper";

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

        <Card>
          <PaperCard.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="folder" />}
          />
          <PaperCard.Cover source={{ uri: "https://picsum.photos/700" }} />
          <PaperCard.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </PaperCard.Actions>
        </Card>

        <View style={{ height: 16 }} />

        <Button
          icon="camera"
          mode="text"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
        <View style={{ height: 8 }} />

        <Button
          icon="camera"
          mode="outlined"
          compact
          loading
          onPress={() => console.log("Outlined Pressed")}
        >
          Press me
        </Button>
        <View style={{ height: 8 }} />
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Press me
        </Button>
      </View>
    </View>
  );
};

export default withTheme(DashboardScreen);
