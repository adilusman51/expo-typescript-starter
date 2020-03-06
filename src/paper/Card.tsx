import React from "react";
import { Card as PaperCard } from "react-native-paper";

type PaperCardProps = React.ComponentProps<typeof PaperCard>;

export type CardProps = PaperCardProps & { elevation?: number };

export const Card: React.FC<CardProps> = ({
  children,
  elevation,
  style,
  theme,
  ...rest
}) => {
  return (
    <PaperCard
      {...rest}
      style={[{ elevation: 4 }, elevation && { elevation }, style]}
      theme={theme}
    >
      {children}
    </PaperCard>
  );
};

export default Card;
