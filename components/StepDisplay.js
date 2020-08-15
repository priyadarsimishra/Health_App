import React from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import Text from "../styles/Text";
import colors from "../styles/colors";
import styled from "styled-components";
import timeperiod from "../data/timePeriod";
import WeekGraph from "./WeekGraph";
import DayGraph from "./DayGraph";
import MonthGraph from "./MonthGraph";
import YearGraph from "./YearGraph";
export default class StepDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPeriod: "Today",
      steps: 2200,
    };
  }
  changeSelectedPeriod = (period) => {
    this.setState({ selectedPeriod: period });
  };
  displayText = (category) => {
    return (
      <PeriodDetails>
        <PeriodText medium color={colors.grey}>
          {category === "Today" ? "TOTAL" : "AVERAGE"}
        </PeriodText>
        <PeriodText heavy large>
          {this.state.steps}{" "}
          <PeriodText medium align={true} color={colors.grey}>
            steps
          </PeriodText>
        </PeriodText>
        <PeriodText semilarge bold>
          {category}
        </PeriodText>
        {category === "Today" ? <DayGraph style={styles.graph} /> : null}
        {category === "Week" ? <WeekGraph style={styles.graph} /> : null}
        {category === "Month" ? <MonthGraph style={styles.graph} /> : null}
        {category === "Year" ? <YearGraph style={styles.graph} /> : null}
      </PeriodDetails>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <TimePeriod
              horizontal={true}
              showsHorizontalScrollIndicatior={false}
            >
              {timeperiod.map((category, index) => {
                return (
                  <Period
                    key={index}
                    onPress={() => {
                      this.changeSelectedPeriod(category);
                      this.displayText(category);
                    }}
                  >
                    <PeriodName
                      heavy
                      medium
                      center
                      selected={
                        this.state.selectedPeriod === category ? true : false
                      }
                    >
                      {category}
                    </PeriodName>
                  </Period>
                );
              })}
            </TimePeriod>
            {this.state.selectedPeriod === "Today"
              ? this.displayText(this.state.selectedPeriod)
              : null}
            {this.state.selectedPeriod === "Week"
              ? this.displayText(this.state.selectedPeriod)
              : null}
            {this.state.selectedPeriod === "Month"
              ? this.displayText(this.state.selectedPeriod)
              : null}
            {this.state.selectedPeriod === "Year"
              ? this.displayText(this.state.selectedPeriod)
              : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    // "#f2f2f2"
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  graph: {
    marginTop: -60,
  },
});

const TimePeriod = styled.ScrollView`
  margin-top: 5px;
  flex-grow: 0;
`;
const Period = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: 6px;
  margin-right: 5px;
  height: 30px;
  width: 92px;
  border-radius: 10px;
  background-color: #e1bee7;
`;
const PeriodName = styled(Text)`
  color: ${(props) => (props.selected ? colors.trueBlue : colors.red)};
`;

const PeriodDetails = styled.View`
  margin: 10px;
`;
const PeriodText = styled(Text)`
  margin-top: ${(props) => (props.align ? "-20px" : "-3px")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
