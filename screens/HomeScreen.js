import React from "react";
import { View, StyleSheet, Button } from "react-native";
import firebase from "firebase";
import firestore from "firebase/firestore";
import Text from "../styles/Text";
import colors from "../styles/Colors";

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
  signOutUser() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ name: "" });

        this.props.navigation.navigate("SplashScreen");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text large heavy center color={colors.black}>
          Welcome {this.state.name}!
        </Text>
        <Button title="Sign Out" onPress={() => this.signOutUser()} />
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
