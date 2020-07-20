import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import ActivityScreen from "./ActivityScreen";

export default class HomeScreenStack extends React.Component {
  render() {
    const HomeStack = createStackNavigator();
    return (
      <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen name="DemoScreen" component={ActivityScreen} />
      </HomeStack.Navigator>
    );
  }
}
