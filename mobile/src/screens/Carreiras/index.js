import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { List } from "./styles";

import Container from "../../components/Container";
import Text from "../../components/Text";
import Card from "../../components/Card";

import DetailsModal from "./DetailsModal";

import api from "../../services/api";

const mock = [
  "5ddd7b2707f8b710adaf1e40",
  "5ddd7b0707f8b710adaf1e3d",
  "5ddd7ae807f8b710adaf1e3c",
  "5ddd7b1107f8b710adaf1e3e",
  "5ddd7b1c07f8b710adaf1e3f",
  "5ddd7b3107f8b710adaf1e41",
  "5ddd7b3c07f8b710adaf1e42",
  "5ddd7b4907f8b710adaf1e43",
  "5ddd7b5107f8b710adaf1e44"
];

const responseMock = [
  {
    __v: 0,
    _id: "5ddd9319a913701e98c0465f",
    courses: ["5ddd7b2707f8b710adaf1e40"],
    description:
      "Responsável por projetar, construir e otimizar interfaces em um sistema web. ",
    title: "Programador Front-End"
  },
  {
    __v: 0,
    _id: "5ddd9319a913701e98c04660",
    courses: ["5ddd7b0707f8b710adaf1e3d"],
    description:
      "Responsável por planejar, construir, implementar e manter a estrutura de uma aplicação.",
    title: "Programador Back-End"
  },
  {
    __v: 0,
    _id: "5ddd9319a913701e98c04661",
    courses: ["5ddd7b1c07f8b710adaf1e3f"],
    description:
      "Responsável por desenvolver e projetar o código base de um jogo.",
    title: "Jogos Digitais"
  },
  {
    __v: 0,
    _id: "5ddd9319a913701e98c04662",
    courses: ["5ddd7b5107f8b710adaf1e44"],
    description:
      "Responsável por aplicar conhecimentos de matemática, informática, estatística e inteligência artificial para solucionar problemas relacionados a Biologia e/ou Bioquímica.",
    title: "Bioinformática"
  },
  {
    __v: 0,
    _id: "5ddd9319a913701e98c04663",
    courses: ["5ddd7ae807f8b710adaf1e3c"],
    description:
      "Coletar, visualizar e analisar dados para resolver problemas e apresentá-los de forma estruturada.",
    title: "Cientista de Dados"
  },
  {
    __v: 0,
    _id: "5ddd9319a913701e98c04664",
    courses: ["5ddd7b3c07f8b710adaf1e42"],
    description:
      "Responsável por administrar o desenvolvimento de um produto, desde sua criação a uma adição de novas funcionalidades.",
    title: "Gerente de Produto"
  },
  {
    __v: 0,
    _id: "5ddd9319a913701e98c04665",
    courses: ["5ddd7b1107f8b710adaf1e3e"],
    description:
      "Responsável por desenvolver toda a aplicação, possui os skills de backend, frontend, etc.",
    title: "Programador Full Stack"
  },
  {
    __v: 0,
    _id: "5ddd9319a913701e98c04666",
    courses: ["5ddd7b3107f8b710adaf1e41"],
    description:
      "Responsável por reunir, organizar e processar informações da empresa com o intuito de prover informações para a gestão do negócio.",
    title: "Business Intelligence"
  },
  {
    __v: 0,
    _id: "5ddd9319a913701e98c04667",
    courses: ["5ddd7b4907f8b710adaf1e43"],
    description:
      "Responsável por desenhar e definir o fluxo de navegação do usuário em sistemas, com o intuito de trazer sempre a melhor experiência para o usuário.",
    title: "UI/UX"
  }
];

export default function Carreiras({ navigation }) {
  const [carreiras, setCarreiras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const materias = navigation.getParam("materias") || [...mock];

    async function fetchData() {
      try {
        const { data } = await api.get("/carrers", {
          params: { courses: materias.join("|") }
        });
        // const { data } = { data: responseMock };
        setCarreiras(data);
        setIsLoading(false);
      } catch (e) {
        Alert.alert("Erro", e.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  function renderItem({ item }) {
    return <Card item={item} onPress={() => handleOnPress(item)} image />;
  }

  function handleOnPress(carreira) {
    setSelected(carreira);
    setShowModal(true);
  }

  function onCloseModal() {
    setShowModal(false);
  }

  function onPressModal(carreira) {
    setShowModal(false);
    // navigation.navigate("Parceiros", { carreira: selected });
    navigation.navigate("Trilha", { carreira: selected });
  }

  return (
    <Container style={{ paddingTop: 40 }}>
      {!isLoading && (
        <>
          <Text size={18} style={{ fontWeight: "bold" }}>
            Confira abaixo as carreiras em tecnologia compatíveis com o seu
            perfil:
          </Text>

          <List
            data={carreiras}
            keyExtractor={item => item._id}
            renderItem={renderItem}
          />
        </>
      )}
      <Spinner visible={isLoading} />
      <DetailsModal
        carreira={selected}
        isVisible={showModal}
        onClose={onCloseModal}
        onSelect={onPressModal}
      />
    </Container>
  );
}
