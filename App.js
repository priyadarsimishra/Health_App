import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabContainer from "./screens/TabContainer";
import SplashScreen from "./screens/SplashScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import fire from "./Fire";
import firebase from "firebase";
export default class App extends React.Component {
  state = {
    loggedIn: false,
  };
  // componentDidMount() {
  //   this.checkLoggedIn();
  // }
  // checkLoggedIn() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) this.setState({ loggedIn: true });
  //     else this.setState({ loggedIn: false });
  //   });
  // }
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="AllScreens" component={TabContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
