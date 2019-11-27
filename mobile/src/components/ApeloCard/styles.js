import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs(props => ({
  ...props,
  style: {
    ...props.style,
    shadowColor: { height: 2, width: 2 }
  }
}))`
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgba(94, 148, 255, 0.2);
  border-radius: 10;
  /* border-color: rgba(42, 67, 115, 0.2); */
  border-color: rgba(94, 148, 255, 0.2);
  border-width: 1;
  shadow-color: rgba(0, 0, 0, 1);
  flex-direction: row;
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain"
})`
  width: 50px;
  height: 50px;
  margin-left: 5px;
  padding-bottom: 5px;
`;
