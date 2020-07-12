import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default class ForumScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Forum Screen</Text>
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
