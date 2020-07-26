import React from "react";
import ForumScreen from "./ForumScreen";
import ProfileScreen from "./ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStackScreen from "./HomeScreenStack";
import colors from "../styles/Colors";

const Tab = createMaterialBottomTabNavigator();
export default function MainTabScreen() {
  return (
    <Tab.Navigator initialRouteName="Home" activeTintColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: colors.red,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          tabBarLabel: "Forum",
          tabBarColor: colors.pink,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: colors.lightpurple,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Example"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: colors.black,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
