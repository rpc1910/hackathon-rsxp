import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import _ from "lodash";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Container from "../../components/Container";
import Text from "../../components/Text";
import Centered from "../../components/Centered";
import Button from "../../components/Button";

import { RoundButton } from "./styles";

import api from "../../services/api";

export default function Materias({ navigation }) {
  const [materias, setMaterias] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const area = navigation.getParam("area") || "Exatas";

    async function fetchData() {
      try {
        const { data } = await api.get("/courses", { params: { area } });
        setMaterias(data);
        setIsLoading(false);
      } catch (e) {
        Alert.alert("Erro", e.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  function handleChooseMaterias(item) {
    if (selected.indexOf(item._id) >= 0) {
      const items = selected.filter(e => e !== item._id);
      setSelected(items);
    } else {
      setSelected([...selected, item._id]);
    }
  }

  function handleNextStep() {
    navigation.navigate("Carreiras", { materias: selected });
  }

  return (
    <Container>
      {!isLoading && (
        <>
          <Centered>
            <View>
              <Text size={18} style={{ fontWeight: "bold", marginBottom: 30 }}>
                Com qual área você se identifica?
              </Text>

              {materias.map(materia => {
                const isSelected = selected.indexOf(materia._id) >= 0;
                const style = isSelected ? { backgroundColor: "#5E94FF" } : {};

                return (
                  <Button
                    key={materia._id}
                    style={{ marginBottom: 15, ...style }}
                    onPress={() => handleChooseMaterias(materia)}
                  >
                    {materia.name}
                  </Button>
                );
              })}
            </View>
          </Centered>
          {selected.length > 0 && (
            <View
              style={{
                position: "absolute",
                bottom: 40,
                right: 40
              }}
            >
              <RoundButton onPress={handleNextStep}>
                <MaterialCommunityIcons
                  name="arrow-right-thick"
                  size={24}
                  color="#fff"
                />
              </RoundButton>
            </View>
          )}
        </>
      )}
      <Spinner visible={isLoading} />
    </Container>
  );
}
