import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import Text from "../styles/Text";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../styles/colors";
import PostCard from "../components/PostCard";

export default class ForumScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.searchBarContainer}>
          <TextInput style={styles.searchBar} placeholder="Search" />
          <SearchButton
            style={{ borderBottomRightRadius: 5, borderTopRightRadius: 5 }}
          >
            <FontAwesome name="search" size={30} color="white" />
          </SearchButton>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  searchBarContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.red,
    height: 100,
    marginTop: -45,
    zIndex: 400,
  },
  searchBar: {
    marginTop: 35,
    padding: 8,
    fontSize: 18,
    width: 300,
    borderWidth: 2,
    backgroundColor: colors.white,
    borderColor: colors.white,
    marginLeft: 2,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    marginRight: 35,
  },
});

const SearchButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6666;
  width: 50px;
  height: 42px;
  margin-left: -37px;
  margin-top: 35px;
`;
