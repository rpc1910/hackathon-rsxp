import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Centered from "../../components/Centered";
import Text from "../../components/Text";
import ApeloCard from "../../components/ApeloCard";
import { List } from "../Carreiras/styles";
const items = [
  {
    _id: "5ddd9319a913701e98c04664",
    title: "Facebook",
    img:
      "https://icon-library.net/images/black-facebook-icon-png/black-facebook-icon-png-13.jpg"
  },
  {
    _id: "5ddd9319a913701e98c04665",
    title: "Netflix",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYI_P7GHTxwOK2kCZFp4hnUmnuiuP1yGGu94kOfXopvMz9LVQC"
  },
  {
    _id: "5ddd9319a913701e98c04666",
    title: "Airbnb",
    img:
      "https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/104761/thumb_airbnb.jpg"
  },
  {
    _id: "5ddd9319a913701e98c04663",
    title: "Apple",
    img:
      "https://www.primeinf.com.br/wp-content/uploads/2019/04/prime-apple-icon.png"
  },
  {
    _id: "2",
    title: "E muito mais!",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTveCdoJMxArfTH8Z3jqsaF1mEvrO8_RPjB7UCzzkOx-hrIiVfD"
  }
];

export default function Apelo({ navigation }) {
  async function handleProsseguir() {
    navigation.navigate("Login");
  }

  function renderItem({ item }) {
    return (
      <ApeloCard
        style={{ height: 70, width: 300 }}
        item={item}
        onPress={() => handleOnPress(item)}
        image
      />
    );
  }

  function handleOnPress(item) {}

  return (
    <Container>
      <Centered>
        <Text
          style={{
            width: 400,
            textAlign: "center",
            marginBottom: 10,
            marginTop: 50,
            fontWeight: "bold",
            fontSize: 24
          }}
        >
          Seu perfil pode ser o que essas empresas procuram!
        </Text>
        <List
          style={{
            paddingBottom: 0,
            alignItem: "center",
            alignContent: "center"
          }}
          data={items}
          keyExtractor={item => item.title}
          renderItem={renderItem}
        />
        <Button
          style={{ marginBottom: 80, marginTop: 0, width: 300 }}
          onPress={handleProsseguir}
        >
          To dentro!
        </Button>
      </Centered>
    </Container>
  );
}
