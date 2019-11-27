import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import _ from "lodash";

import Container from "../../components/Container";
import Text from "../../components/Text";
import Centered from "../../components/Centered";
import Button from "../../components/Button";

import api from "../../services/api";

export default function AreasConhecimentos({ navigation }) {
  const [areas, setAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get("/courses");
        const groups = _.groupBy(data, item => item.area);
        setAreas(Object.keys(groups));
        setIsLoading(false);
      } catch (e) {
        Alert.alert("Erro", e.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  function handleChooseArea(area) {
    navigation.navigate("Materias", { area });
  }

  return (
    <Container>
      {!isLoading && (
        <Centered>
          <View>
            <Text size={18} style={{ fontWeight: "bold", marginBottom: 30 }}>
              Com qual área você se identifica?
            </Text>

            {areas.map(area => (
              <Button
                key={area}
                style={{ marginBottom: 15 }}
                onPress={() => handleChooseArea(area)}
              >
                {area}
              </Button>
            ))}
          </View>
        </Centered>
      )}
      <Spinner visible={isLoading} />
    </Container>
  );
}
