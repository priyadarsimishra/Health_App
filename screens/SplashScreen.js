import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import styled from "styled-components/native";
import Text from "../styles/Text";
import colors from "../styles/Colors";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SplashScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={[colors.pink, colors.lightpurple]}
        style={{ flex: 1 }}
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("LoginScreen")}
            >
              <Text heavy large style={styles.btn_text}>
                Get Started
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </SafeAreaView>
      </LinearGradient>
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
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    padding: 30,
    // fontFamily: require("../fonts/Roboto-Black.ttf"),
  },
  title: {
    color: colors.white,
  },
  desc: {
    color: colors.white,
  },
  button: {
    marginTop: 50,
    width: 200,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_text: {},
});
