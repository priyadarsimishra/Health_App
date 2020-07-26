import React from "react";
import {
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import Text from "../styles/Text";
import styled from "styled-components";
import colors from "../styles/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default class ProfileScreen extends React.Component {
  state = {
    name: "",
  };
  constructor() {
    super();
    this.setName();
  }
  async setName() {
    username = firebase.auth().currentUser.displayName;
    this.state = { name: username };
  }
  signOutUser() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ name: " " });
        this.props.navigation.navigate("SplashScreen");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.signOutButton}>
          <LinearGradient
            colors={[colors.pink, colors.lightpurple]}
            style={styles.signOutButton}
          >
            <TouchableOpacity
              title="Sign Out"
              onPress={() => this.signOutUser()}
            >
              <Feather
                name="arrow-up-circle"
                size={24}
                color={colors.white}
                style={styles.up}
              />
              <Text small heavy right style={styles.signOut}>
                Sign Out
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <ProfileImage source={require("../assets/healthlogo.png")} />
        <Name large bold>
          {this.state.name}
        </Name>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
  },
  signOutButton: {
    margin: 4,
    width: 120,
    borderRadius: 10,
    borderColor: colors.white,
  },
  signOut: {
    padding: 5,
    fontSize: 20,
    color: colors.white,
    marginTop: -33,
  },
  up: {
    marginTop: 10,
  },
});

const ProfileImage = styled.Image`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  border-width: 6px;
  border-color: #fff;
  border-radius: 150px;
`;

const Name = styled(Text)`
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
`;
