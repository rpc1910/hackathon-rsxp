import React from "react";
import { Image, ScrollView } from "react-native";
import Modal from "react-native-modal";

import { Container, Separator } from "./styles";

import Text from "../../../components/Text";
import Button from "../../../components/Button";

export default function DetailsModal({
  carreira,
  onClose,
  onSelect,
  ...props
}) {
  return (
    <Modal onBackButtonPress={onClose} {...props}>
      <Container>
        <ScrollView>
          <Text size={22} color="#4267b2" style={{ fontWeight: "bold" }}>
            {carreira.title}
          </Text>
          <Image
            source={{ uri: "https://placeimg.com/600/200/tech" }}
            resizeMode="cover"
            style={{ height: 150, marginBottom: 20 }}
          />

          <Text size={13} color="#000">
            {carreira.description}
          </Text>
          <Separator />
          <Text size={18} color="#4267b2" style={{ fontWeight: "bold" }}>
            Empresas que utilizam?
          </Text>
          <Text size={13} color="#000">
            Google, Facebook, Nubank, etc
          </Text>

          <Separator />
          <Text size={18} color="#4267b2" style={{ fontWeight: "bold" }}>
            O que consigo fazer com essa tecnologia?
          </Text>
          <Text size={13} color="#000">
            Com essa tecnologia você pode desenvolver sites, aplicativos, etc.
          </Text>

          <Separator />
          <Button
            onPress={() => onSelect(carreira)}
            color="#4267b2"
            textColor="#fff"
          >
            Quero aprender {carreira.title}
          </Button>
          <Button onPress={onClose} style={{ marginTop: 10 }}>
            Voltar
          </Button>
        </ScrollView>
      </Container>
    </Modal>
  );
}
