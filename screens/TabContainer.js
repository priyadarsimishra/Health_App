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
    <Tab.Navigator
      initialRouteName="Home"
      activeTintColor="#fff"
      shifting={true}
      activeColor={colors.white}
      inactiveColor="#FFEB3B"
      barStyle={{ backgroundColor: colors.red }}
    >
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
          tabBarColor: colors.waterBlue,
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
          tabBarColor: colors.brightOrange,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
