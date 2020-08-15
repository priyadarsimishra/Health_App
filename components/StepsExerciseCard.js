import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../styles/colors";
import Text from "../styles/Text";
import styled from "styled-components";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

export default class StepsExerciseCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardTitle heavy smallestLarge color={colors.redOrange}>
          Walking + Running Distance Tracker
        </CardTitle>
        <FontAwesome5
          name="running"
          color={colors.redOrange}
          size={28}
          style={styles.running}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10, //adds some space between graph card
    backgroundColor: colors.white,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 12,
    height: 350,
  },
  running: {
    marginTop: -35,
    marginLeft: 330,
  },
});

const CardTitle = styled(Text)`
  margin: 8px;
`;
