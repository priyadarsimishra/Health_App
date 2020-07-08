import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginInScreen from "./screens/LoginInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ExtraInfoScreen from "./screens/ExtraInfoScreen";
import fire from "./Fire";

const AuthStack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AuthStack.Navigator headerMode="none">
          <AuthStack.Screen name="LoginIn" component={LoginInScreen} />
          <AuthStack.Screen name="SignUp" component={SignUpScreen} />
          <AuthStack.Screen name="ExtraInfo" component={ExtraInfoScreen} />
        </AuthStack.Navigator>
      </NavigationContainer>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
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
