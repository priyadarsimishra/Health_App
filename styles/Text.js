import React from "react";
import styled from "styled-components/native";
import { AppLoading } from "expo";
// import {
//   useFonts,
//   AlegreyaSans_100Thin,
//   AlegreyaSans_100Thin_Italic,
//   AlegreyaSans_300Light,
//   AlegreyaSans_300Light_Italic,
//   AlegreyaSans_400Regular,
//   AlegreyaSans_400Regular_Italic,
//   AlegreyaSans_500Medium,
//   AlegreyaSans_500Medium_Italic,
//   AlegreyaSans_700Bold,
//   AlegreyaSans_700Bold_Italic,
//   AlegreyaSans_800ExtraBold,
//   AlegreyaSans_800ExtraBold_Italic,
//   AlegreyaSans_900Black,
//   AlegreyaSans_900Black_Italic,
// } from "@expo-google-fonts/alegreya-sans";
import {
  useFonts,
  NunitoSans_200ExtraLight,
  NunitoSans_200ExtraLight_Italic,
  NunitoSans_300Light,
  NunitoSans_300Light_Italic,
  NunitoSans_400Regular,
  NunitoSans_400Regular_Italic,
  NunitoSans_600SemiBold,
  NunitoSans_600SemiBold_Italic,
  NunitoSans_700Bold,
  NunitoSans_700Bold_Italic,
  NunitoSans_800ExtraBold,
  NunitoSans_800ExtraBold_Italic,
  NunitoSans_900Black,
  NunitoSans_900Black_Italic,
} from "@expo-google-fonts/nunito-sans";

export default TextStyle = ({ ...props }) => {
  let [fontsLoaded, error] = useFonts({
    NunitoSans_200ExtraLight,
    NunitoSans_200ExtraLight_Italic,
    NunitoSans_300Light,
    NunitoSans_300Light_Italic,
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    NunitoSans_700Bold_Italic,
    NunitoSans_800ExtraBold,
    NunitoSans_800ExtraBold_Italic,
    NunitoSans_900Black,
    NunitoSans_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  // basically props are the properties that we give in out text components
  // and then this method hear is called and it returns a text with those props
  // and maintains the same text which is the props.children
  return <Text {...props}>{props.children}</Text>;
};

// the color if supplied in properties will be used or default white(might want to change later)
// also add a font-family when ready
// you can edit the font sizes as you wish

const Text = styled.Text`
  color: ${(props) => props.color ?? "#000000"};
  ${({ title, extralarge, semilarge, large, medium, small, huge }) => {
    switch (true) {
      case title:
        return `font-size: 48px`;
      case extralarge:
        return `font-size: 36px`;
      case huge:
        return `font-size: 60px`;
      case semilarge:
        return `font-size: 28px`;
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
        return `font-family: 'NunitoSans_300Light'`;
      case bold:
        return `font-family:'NunitoSans_700Bold'`;
      case heavy:
        return `font-family:'NunitoSans_900Black'`;
      default:
        return `font-family:'NunitoSans_600SemiBold'`;
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
