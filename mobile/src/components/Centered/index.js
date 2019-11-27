import React from "react";
import styled from "styled-components";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function Centered({ children }) {
  return <View>{children}</View>;
}
