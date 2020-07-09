import React from "react";
import { View, StyleSheet } from "react-native";
import firebase from "firebase";
import firestore from "firebase/firestore";
import Text from "../styles/Text";
import colors from "../styles/Colors";

export default class ExtraInfoScreen extends React.Component {
  state = {
    name: firebase.auth().currentUser.displayName,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text large heavy center color="black">
          Welcome {this.state.name}!
        </Text>
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
