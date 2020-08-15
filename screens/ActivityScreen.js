import React from "react";
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import StepDisplay from "../components/StepDisplay";
import StepsExerciseCard from "../components/StepsExerciseCard";
import { FontAwesome } from "@expo/vector-icons";
import Text from "../styles/Text";

export default class ActivityScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" />

        <SafeAreaView>
          {/* THIS BUTTON DOES NOT WORK RIGHT NOW */}
          <TouchableOpacity
            style={{
              marginLeft: 12,
              width: 24,
            }}
            onClick={() => {
              this.props.navigation.navigate("HomeScreen");
            }}
          >
            <FontAwesome
              name="arrow-left"
              size={24}
              color="black"
              onClick={() => {
                this.props.navigation.navigate("HomeScreen");
              }}
            />
          </TouchableOpacity>

          <Text
            heavy
            extralarge
            center
            style={{
              marginBottom: 10,
              fontSize: 34,
              letterSpacing: 2,
              marginTop: -34,
            }}
          >
            YOUR ACTIVITY
          </Text>
        </SafeAreaView>

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
