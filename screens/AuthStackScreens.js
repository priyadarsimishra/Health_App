import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

export default class AuthStackScreens extends React.Component {
  render() {
    const AuthStack = createStackNavigator();
    return (
      <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
        <AuthStack.Screen
          name="LoginScreen"
          component={SignInScreen}
          options={{
            gestureEnabled: false,
          }}
        />
        <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
      </AuthStack.Navigator>
    );
  }
}

// export default AuthStackScreens
