import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import Text from "../styles/Text";
import colors from "../styles/Colors";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import { FontAwesome } from "@expo/vector-icons";

export default class SplashScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("/Users/priyadarsimishra/Desktop/React Native Programming/HealthApp/assets/splashbg.png")}
        style={styles.container}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Animatable.Image
              animation="bounceIn"
              style={styles.logo}
              source={require("/Users/priyadarsimishra/Desktop/React Native Programming/HealthApp/assets/healthlogo.png")}
            />
          </View>
          <Animatable.View style={styles.footer} animation="pulse">
            <Text heavy large title style={styles.title}>
              Health App
            </Text>
            <Text large bold style={styles.desc}>
              {/* TO BE CHANGED */}
              Learn about your body. Learn about Food. Keep your body strong and
              healthy
            </Text>
            <View style={styles.buttonContainer}>
              <LinearGradient
                colors={[colors.lightGreen, colors.cyan]}
                style={styles.button}
              >
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate("LoginScreen")}
                >
                  <Text heavy large style={styles.btn_text}>
                    Get Started
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </Animatable.View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 350,
    height: 350,
    borderRadius: 300,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    // fontFamily: require("../fonts/Roboto-Black.ttf"),
  },
  title: {
    color: colors.white,
  },
  desc: {
    color: colors.white,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    shadowOffset: { width: 2, height: 20 },
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  btn_text: {
    color: "#0000FF",
  },
});
