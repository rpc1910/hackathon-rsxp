import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ color }) => color || "#fff"};
  border-radius: 20px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;
