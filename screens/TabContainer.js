import React from "react";
import ForumScreen from "./ForumScreen";
import ProfileScreen from "./ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStackScreen from "./HomeScreenStack";
import colors from "../styles/colors";

const Tab = createMaterialBottomTabNavigator();
export default function MainTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeTintColor="#fff"
      shifting={true}
      activeColor={colors.white}
      inactiveColor="#ECF0F1"
      barStyle={{ backgroundColor: colors.red }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#2980B9",
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
          tabBarColor: colors.red,
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
          tabBarColor: "#45B39D",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
