import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import firebase from "firebase";
import firestore from "firebase/firestore";
import Text from "../styles/Text";
import colors from "../styles/colors";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <View>
            <Text
              title
              heavy
              left
              color={colors.black}
              style={styles.dashboard}
            >
              Dashboard
            </Text>
            <Text extralarge heavy color={colors.blue} style={styles.titleText}>
              Activity
            </Text>
            <TouchableOpacity
              style={styles.activityCard}
              onPress={() => this.props.navigation.navigate("ActivityScreen")}
            ></TouchableOpacity>
            <Text
              extralarge
              heavy
              color={colors.orange}
              style={styles.titleText}
            >
              Life Style
            </Text>
            <TouchableOpacity
              style={styles.nutritionCard}
              onPress={() => this.props.navigation.navigate("LifeStyleScreen")}
            ></TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  dashboard: {
    paddingLeft: 20,
  },
  titleText: {
    marginTop: 20,
    marginLeft: 25,
    marginBottom: -18,
    letterSpacing: 1,
  },
  activityCard: {
    margin: 20,
    borderColor: colors.lightBlue,
    backgroundColor: colors.lightBlue,
    borderWidth: 3,
    height: 350,
    borderRadius: 25,
    shadowOffset: { width: 3, height: 15 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  nutritionCard: {
    margin: 20,
    borderColor: colors.lightOrange,
    backgroundColor: colors.lightOrange,
    borderWidth: 3,
    height: 350,
    borderRadius: 25,
    shadowOffset: { width: 3, height: 15 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
});
