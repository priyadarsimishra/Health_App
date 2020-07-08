import React from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase";
import firestore from "firebase/firestore";

export default class ExtraInfoScreen extends React.Component {
  state = {
    name: firebase.auth().currentUser.displayName,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome {this.state.name}!</Text>
      </View>
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
