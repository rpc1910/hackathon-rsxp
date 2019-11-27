import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { List } from "../Carreiras/styles";

import Container from "../../components/Container";
import Text from "../../components/Text";
import Card from "../../components/Card";

const mock = [
  {
    __id: "1",
    title: "Conceitos de HTML",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis fringilla nunc. Aliquam imperdiet maximus augue, id suscipit enim ullamcorper eget."
  },
  {
    __id: "2",
    title: "Conceitos de CSS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis fringilla nunc. Aliquam imperdiet maximus augue, id suscipit enim ullamcorper eget."
  },
  {
    __id: "3",
    title: "Lógica de programação",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis fringilla nunc. Aliquam imperdiet maximus augue, id suscipit enim ullamcorper eget."
  },
  {
    __id: "4",
    title: "Conceitos de Javascript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis fringilla nunc. Aliquam imperdiet maximus augue, id suscipit enim ullamcorper eget."
  },
  {
    __id: "5",
    title: "Conceitos de desenvolvimento",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis fringilla nunc. Aliquam imperdiet maximus augue, id suscipit enim ullamcorper eget."
  },
  {
    __id: "6",
    title: "Conceitos de React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis fringilla nunc. Aliquam imperdiet maximus augue, id suscipit enim ullamcorper eget."
  }
];

export default function Trilha({ navigation }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = { data: mock };
        setItems(data);
        setIsLoading(false);
      } catch (e) {
        Alert.alert("Erro", e.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  function renderItem({ item }) {
    return (
      <Card item={item} onPress={() => handleOnPress(item)} image={false} />
    );
  }

  function handleOnPress(item) {}

  return (
    <Container style={{ paddingTop: 40 }}>
      {!isLoading && (
        <>
          <Text size={18} style={{ fontWeight: "bold" }}>
            O caminho do: Desenvolvedor Frontend
          </Text>

          <List
            data={items}
            keyExtractor={item => item.title}
            renderItem={renderItem}
          />
        </>
      )}
      <Spinner visible={isLoading} />
    </Container>
  );
}
