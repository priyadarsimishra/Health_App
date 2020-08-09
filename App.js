import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabContainer from "./screens/TabContainer";
import SplashScreen from "./screens/SplashScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import AuthStackScreens from "./screens/AuthStackScreens";
import { fire, auth } from "./Fire";
import firebase from "firebase";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: undefined,
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) this.setState({ loggedIn: true });
      else this.setState({ loggedIn: false });
    });
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        {this.state.loggedIn ? (
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="AllScreens"
              component={TabContainer}
              options={{
                gestureEnabled: false,
              }}
            />
          </Stack.Navigator>
        ) : (
          <AuthStackScreens />
        )}
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
