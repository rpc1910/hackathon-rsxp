import React from "react";
import { View } from "react-native";

import { Container, Image } from "./styles";
import Text from "../Text";

export default function Card({ item, image, ...props }) {
  return (
    <Container {...props}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold" }} size={15}>
          {item.title}
        </Text>
        <Text size={13}>{item.description}</Text>
      </View>
      {image && <Image source={{ uri: `${item.img}` }} />}
    </Container>
  );
}
