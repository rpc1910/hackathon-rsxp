import React from "react";
import { View } from "react-native";

import { Container } from "./styles";
import Text from "../Text";

export default function Button({ children, textColor, ...props }) {
  return (
    <Container {...props}>
      <Text color={textColor || `black`}>{children}</Text>
    </Container>
  );
}
