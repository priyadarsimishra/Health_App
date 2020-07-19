import React from "react";
import { SafeAreaView, StyleSheet, Button } from "react-native";
import firebase from "firebase";
import firestore from "firebase/firestore";
import Text from "../styles/Text";
import colors from "../styles/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  state = {
    name: firebase.auth().currentUser.displayName,
  };
  constructor() {
    super();
    this.setName();
  }
  async setName() {
    username = firebase.auth().currentUser.displayName;
    this.state = { name: username };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text title heavy center color={colors.black} style={styles.dashboard}>
          Dashboard
        </Text>
        <Text semilarge heavy style={styles.activityText}>
          Activity
        </Text>
        <TouchableOpacity style={styles.activityCard}></TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  dashboard: {
    paddingLeft: 20,
    textAlign: "left",
  },
  activityText: {
    marginTop: 20,
    marginLeft: 25,
    marginBottom: -18,
  },
  activityCard: {
    margin: 20,
    borderColor: colors.black,
    borderWidth: 3,
    height: 300,
    borderRadius: 25,
  },
});
