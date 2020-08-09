import React from "react";
import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
import StepDisplay from "../components/StepDisplay";
import StepsExerciseCard from "../components/StepsExerciseCard";
import Text from "../styles/Text";
import FusionCharts from "react-native-fusioncharts";

export default class ActivityScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" />
        <StepDisplay />
        <Text extralarge heavy style={{ marginTop: 20, marginLeft: 10 }}>
          Highlights
        </Text>
        <StepsExerciseCard />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
