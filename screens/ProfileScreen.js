import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import firebase from "firebase";

export default class ProfileScreen extends React.Component {
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
        <Text>Profile Screen</Text>
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
