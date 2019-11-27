import styled, { css } from "styled-components/native";
import PropTypes from "prop-types";

const Text = styled.Text`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}
`;

Text.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  underline: PropTypes.bool,
  type: PropTypes.oneOf([
    "regular",
    "bold",
    "condensed",
    "light",
    "medium",
    "heavy"
  ])
};

Text.defaultProps = {
  size: 15,
  color: "#fff",
  type: "regular",
  underline: false
};

export default Text;
