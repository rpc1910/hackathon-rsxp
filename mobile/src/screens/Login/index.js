import React from "react";
import { View, Image } from "react-native";
import { Logo, Form } from "./styles";
import Container from "../../components/Container";
import Centered from "../../components/Centered";
import Input from "../../components/Input";
import Button from "../../components/Button";

import logo from "../../assets/images/logo.png";

export default function Login({ navigation }) {
  function handleLogin() {
    navigation.navigate("AreasConhecimento");
  }

  return (
    <Container>
      <Centered>
        <Logo resizeMode="contain" source={logo} />
      </Centered>

      <Form>
        <Input label="Escola" placeholder="Informe sua escola" />
        <Input label="Matrícula" placeholder="Informe sua matrícula" />

        <Button style={{ marginBottom: 30 }} onPress={handleLogin}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
