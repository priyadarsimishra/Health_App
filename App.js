import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStackScreens from "./screens/AuthStack";
import fire from "./Fire";
import HomeScreen from "./screens/HomeScreen";
import firebase from "firebase";
export default class App extends React.Component {
  state = {
    loggedIn: false,
  };
  // FIX THIS STUFF IT DOESNT DISPLAY displayName when user signs in(in sign-up screen)
  constructor() {
    super();
    this.checkLoggedIn();
  }
  checkLoggedIn() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) this.setState({ loggedIn: true });
      else this.setState({ loggedIn: false });
    });
  }
  Stack = createStackNavigator();
  render() {
    return (
      <NavigationContainer>
        <AuthStackScreens />
        {/* {this.state.loggedIn ? (
          <this.Stack.Navigator>
            <this.Stack.Screen name="HomeScreen" component={HomeScreen} />
          </this.Stack.Navigator>
        ) : (
          <AuthStackScreens />
        )} */}
      </NavigationContainer>
    );
    // this.checkLoggedIn();
    // return (
    //   <NavigationContainer>
    //     {this.state.loggedIn ? console.log("Logged in") :  />}
    //   </NavigationContainer>
    // );
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
