import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 30px;
`;

export const ContainerInput = styled.View`
  border-bottom-color: ${({ color }) => color};
  border-bottom-width: 2px;
  margin-bottom: 5px;
`;

const shareCss = css`
  color: ${({ color }) => color};
  font-size: 20px;
  margin-top: 5px;
  padding: 3px;
`;

export const TextInput = styled.TextInput.attrs({
  placeHolderTextColor: "#fff"
})`
  ${shareCss}
`;
