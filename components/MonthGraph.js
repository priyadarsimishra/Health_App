import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";
export default class MonthGraph extends Component {
  constructor(props) {
    super(props);

    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "scrollcolumn2d",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        chart: {
          theme: "fusion",
          xaxisname: "Months",
          yaxisname: "Steps",
          showvalues: "1",
          formatNumberScale: "0",
          numVisiblePlot: "12",
          scrollheight: "0",
          flatScrollBars: "1",
          scrollShowButtons: "0",
          scrollColor: "#000000",
          showHoverEffect: "1",
        },
        categories: [
          {
            category: [
              {
                label: "Jan",
              },
              {
                label: "Feb",
              },
              {
                label: "Mar",
              },
              {
                label: "Apr",
              },
              {
                label: "May",
              },
              {
                label: "Jun",
              },
              {
                label: "Jul",
              },
              {
                label: "Aug",
              },
              {
                label: "Sep",
              },
              {
                label: "Oct",
              },
              {
                label: "Nov",
              },
              {
                label: "Dec",
              },
              {
                label: "Jan",
              },
              {
                label: "Feb",
              },
              {
                label: "Mar",
              },
              {
                label: "Apr",
              },
              {
                label: "May",
              },
              {
                label: "Jun",
              },
              {
                label: "Jul",
              },
              {
                label: "Aug",
              },
              {
                label: "Sep",
              },
              {
                label: "Oct",
              },
              {
                label: "Nov",
              },
              {
                label: "Dec",
              },
            ],
          },
        ],
        dataset: [
          {
            data: [
              {
                value: "200",
              },
              {
                value: "400",
              },
              {
                value: "500",
              },
              {
                value: "1000",
              },
              {
                value: "200",
              },
              {
                value: "230",
              },
              {
                value: "400",
              },
              {
                value: "500",
              },
              {
                value: "100",
              },
              {
                value: "200",
              },
              {
                value: "230",
              },
              {
                value: "400",
              },
              {
                value: "100",
              },
              {
                value: "244",
              },
              {
                value: "2000",
              },
              {
                value: "230",
              },
              {
                value: "400",
              },
              {
                value: "500",
              },
              {
                value: "230",
              },
              {
                value: "400",
              },
              {
                value: "500",
              },
              {
                value: "400",
              },
              {
                value: "600",
              },
            ],
          },
        ],
      },
    };

    this.state = chartConfig;

    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html",
      },
      ios: require("../assets/fusioncharts.html"),
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    marginLeft: -45,
  },
  //   header: {
  //     fontWeight: "bold",
  //     fontSize: 20,
  //     textAlign: "center",
  //     paddingBottom: 10,
  //   },

  //   chartContainer: {
  //     height: 400,
  //     borderColor: "#000",
  //     borderWidth: 1,
  //   },
});
