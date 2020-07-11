import React from "react";
import LoginInScreen from "./LoginInScreen";
import SignUpScreen from "./SignUpScreen";
import HomeScreen from "./HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();
export default class AuthStackScreens extends React.Component {
  render() {
    return (
      <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="LoginScreen" component={LoginInScreen} />
        <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
      </AuthStack.Navigator>
    );
  }
}
