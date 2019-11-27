import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";

export const Background = styled.View`
  flex: 1;
  background: #4267b2;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 40
  }
})``;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === "ios",
  behavior: "padding"
})`
  flex: 1;
`;

export default function Container({ children, ...props }) {
  return (
    <Background>
      <SafeAreaView>
        <KeyboardAvoidingView>
          <ScrollView {...props}>{children}</ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Background>
  );
}
