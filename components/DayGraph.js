import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FusionCharts from "react-native-fusioncharts";
export default class DayGraph extends Component {
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
          xaxisname: "Day",
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
                label: "12 am",
              },
              {
                label: "1 am",
              },
              {
                label: "2 am",
              },
              {
                label: "4 am",
              },
              {
                label: "5 am",
              },
              {
                label: "6 am",
              },
              {
                label: "7 am",
              },
              {
                label: "8 am",
              },
              {
                label: "9 am",
              },
              {
                label: "10 am",
              },
              {
                label: "11 am",
              },
              {
                label: "12 pm",
              },
              {
                label: "1 pm",
              },
              {
                label: "2 pm",
              },
              {
                label: "3 pm",
              },
              {
                label: "4 pm",
              },
              {
                label: "5 pm",
              },
              {
                label: "6 pm",
              },
              {
                label: "7 pm",
              },
              {
                label: "8 pm",
              },
              {
                label: "9 pm",
              },
              {
                label: "10 pm",
              },
              {
                label: "11 pm",
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
