import React from "react";
import styled from "styled-components/native";

export default TextStyle = ({ ...props }) => {
  // basically props are the properties that we give in out text components
  // and then this method hear is called and it returns a text with those props
  // and maintains the same text which is the props.children
  return <Text {...props}>{props.children}</Text>;
};

// the color if supplied in properties will be used or default white(might want to change later)
// also add a font-family when ready
// you can edit the font sizes as you wish
const Text = styled.Text`
  color: ${(props) => props.color ?? "#ffffff"};

  ${({ title, large, medium, small }) => {
    switch (true) {
      case title:
        return `font-size: 32px`;
      case large:
        return `font-size: 20px`;
      case medium:
        return `font-size: 16px`;
      case small:
        return `font-size: 13px`;
      default:
        return `font-size: 14px`;
    }
  }};
  ${({ light, bold, heavy }) => {
    switch (true) {
      case light:
        return `font-weight: 200`;
      case bold:
        return `font-weight: 600`;
      case heavy:
        return `font-weight: 700`;
      default:
        return `font-weight: 400`;
    }
  }}
  ${({ center, right }) => {
    switch (true) {
      case center:
        return `text-align: center`;
      case right:
        return `text-align: right`;
      default:
        return `text-align: left`;
    }
  }}
`;
