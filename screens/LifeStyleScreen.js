import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Text from "../styles/Text";
import colors from "../styles/colors";

export default class LifeStyleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Life Style Screen</Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
