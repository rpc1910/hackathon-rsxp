import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { View } from "react-native";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Centered from "../../components/Centered";
import conexao from "../../../assets/conexao.jpeg";
// import { Container } from './styles';

const mock = {
  __v: 0,
  _id: "5ddd9319a913701e98c0465f",
  courses: ["5ddd7b2707f8b710adaf1e40"],
  description:
    "Responsável por projetar, construir e otimizar interfaces em um sistema web. ",
  title: "Programador Front-End"
};

export default function Parceiros({ navigation }) {
  const [carreira, setCarreira] = useState({});

  useEffect(() => {
    const selected = navigation.getParam("carreira") || mock;
    setCarreira(selected);
  }, []);

  function handlePular() {
    navigation.navigate("Trilha");
  }

  return (
    <Container>
      <Centered>
        <Text
          style={{
            marginBottom: 30,
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            alignContent: "center"
          }}
        >
          Que tal um parceiro de estudos?
        </Text>
        <Image
          style={{ width: 213, height: 320, marginBottom: 10 }}
          source={conexao}
        />
        <Button style={{ marginBottom: 30, width: 300 }} onPress={handlePular}>
          Quero trabalhar de bermuda
        </Button>
      </Centered>
    </Container>
  );
}
