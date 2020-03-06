import React from "react";
import { Appbar, useTheme } from "react-native-paper";

type PaperHeaderProps = React.ComponentProps<typeof Appbar.Header>;

export type FlatHeaderProps = PaperHeaderProps & { elevation?: number };

export const FlatHeader: React.FC<FlatHeaderProps> = ({
  children,
  elevation,
  style,
  theme,
  ...rest
}) => {
  const paperTheme = useTheme();
  return (
    <Appbar.Header
      {...rest}
      style={[{ elevation: 0 }, elevation && { elevation }, style]}
      theme={{ colors: { primary: paperTheme.colors.surface } }}
    >
      {children}
    </Appbar.Header>
  );
};

export default FlatHeader;
