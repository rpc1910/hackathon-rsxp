import React, { useEffect, useState } from "react";
import { View } from "react-native";

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

  return <View />;
}
