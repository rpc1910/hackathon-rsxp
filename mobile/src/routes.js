import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";
import { createStackNavigator } from "react-navigation-stack";

import Apelo from "./screens/Apelo";
import Login from "./screens/Login";
import AreasConhecimento from "./screens/AreasConhecimentos";
import Materias from "./screens/Materias";
import Carreiras from "./screens/Carreiras";
import Parceiros from "./screens/Parceiros";
import Trilha from "./screens/Trilha";

export default createAppContainer(
  createStackNavigator(
    {
      Apelo,
      Login,
      AreasConhecimento,
      Materias,
      Carreiras,
      Parceiros,
      Trilha
    },
    {
      initialRouteName: "Apelo",
      defaultNavigationOptions: {
        headerTransparent: true,
        headerTintColor: "#fff"
      },
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-left"
            durationMs={100}
            interpolation="easeIn"
          />
          <Transition.In type="slide-right" durationMs={100} />
        </Transition.Together>
      )
    }
  )
);
