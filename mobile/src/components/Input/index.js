/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

import { Container, ContainerInput, TextInput } from "./styles";
import Text from "../Text";

function Input({ label, type, inverse, error, helper, ...props }, ref) {
  const color = inverse ? "#000" : "#fff";
  const colorError = inverse ? "#f00" : "rgba(255,255,255,0.8)";

  return (
    <Container>
      <ContainerInput color={color}>
        <Text color={color} size={14} type="medium">
          {label}
        </Text>
        {helper && (
          <Text size={10} color={color} style={{ marginTop: 3 }}>
            {helper}
          </Text>
        )}
        <TextInput ref={ref} type={type} color={color} {...props} />
      </ContainerInput>
      {error && (
        <Text size={12} color={colorError}>
          {error}
        </Text>
      )}
    </Container>
  );
}

export default forwardRef(Input);
