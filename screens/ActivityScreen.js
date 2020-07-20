import React from "react";
import { SafeAreaView, StyleSheet, Dimensions, View } from "react-native";
import Text from "../styles/Text";
import colors from "../styles/Colors";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

export default class ActivityScreen extends React.Component {
  render() {
    const data = [20, 80, 100, 55, 40, 20, 10];
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={25}
            width={450}
            height={450}
          >
            <VictoryBar
              categories={{
                x: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              }}
              data={[
                { x: "Mon", y: 20 },
                { x: "Tue", y: 80 },
                { x: "Wed", y: 150 },
                { x: "Thu", y: 55 },
                { x: "Fri", y: 40 },
                { x: "Sat", y: 20 },
                { x: "Sun", y: 10 },
              ]}
              style={{
                data: { fill: colors.orange },
              }}
            />
          </VictoryChart>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
