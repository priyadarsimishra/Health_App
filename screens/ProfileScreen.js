import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
} from "react-native";
import firebase from "firebase";
import Text from "../styles/Text";
import styled from "styled-components";
import colors from "../styles/colors";
import { auth, database } from "../Fire";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      uid: "",
      name: "",
      username: "",
      weight: "",
      age: "",
      bio: "",
      followers: "",
      following: "",
      posts: "",
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ uid: user.uid });
        this.getUserData();
      } else {
      }
    });
  }
  signOutUser = () => {
    auth
      .signOut()
      .then(() => {
        this.setState({ name: " " });
        this.props.changeLoggedIn;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getUserData = () => {
    database
      .collection("users")
      .doc(this.state.uid)
      .get()
      .then((document) => {
        const userData = document.data();
        this.setState({
          name: userData.name,
          username: userData.username,
          weight: userData.weight,
          age: userData.age,
          posts: userData.posts,
          following: userData.following,
          followers: userData.followers,
          bio: userData.bio,
        });
      });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <SignOutButton onPress={() => this.signOutUser()}>
            <FontAwesome
              name="chevron-circle-left"
              size={30}
              color="black"
              style={styles.up}
            />
            <SignOutText center heavy medium>
              Sign Out
            </SignOutText>
          </SignOutButton>
          <ProfileImage source={require("../assets/healthlogo.png")} />
          <Name large heavy>
            {this.state.name}
          </Name>
          <Username medium heavy>
            @{this.state.username}
          </Username>
          <ProfileStatus>
            <Text style={styles.detailsText} heavy large center>
              Details
            </Text>
            <View>
              <Text bold center style={styles.bioText}>
                {this.state.bio.length >= 320
                  ? this.state.bio.substring(0, 317) + "..."
                  : this.state.bio}
              </Text>
            </View>
            <View style={styles.profileStatus}>
              <Text semilarge color={colors.redOrange} bold>
                Weight:{" "}
                <Text heavy large>
                  {this.state.weight} lbs
                </Text>{" "}
                Age:{" "}
                <Text heavy large>
                  {this.state.age}
                </Text>
              </Text>
            </View>

            <View style={styles.userSocialDetails}>
              <Text color={colors.redOrange} bold>
                Followers: <Text heavy>{this.state.followers}</Text> |
                Following: <Text heavy>{this.state.following}</Text> | Posts:{" "}
                <Text heavy>{this.state.posts}</Text>
              </Text>
            </View>
          </ProfileStatus>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
  },
  detailsText: {
    textShadowColor: colors.grey,
    marginRight: 18,
  },
  userSocialDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    marginLeft: -20,
  },
  profileStatus: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -30,
  },
  bioText: {
    textAlign: "center",
    marginLeft: -10,
  },
});

const ProfileImage = styled.Image`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  border-width: 6px;
  border-color: #fff;
  border-radius: 150px;
`;

const Name = styled(Text)`
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
`;
const Username = styled(Text)`
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
`;

const SignOutButton = styled.TouchableOpacity`
  display: flex;
  background-color: #fff;
  width: 40%;
  padding: 5px;
  border-radius: 12px;
  margin: 5px;
  margin-left: 10px;
`;
const SignOutText = styled(Text)`
  margin-top: -31px;
  font-size: 24px;
  margin-left: 16px;
`;
const ProfileStatus = styled.View`
  background-color: #fff;
  margin-top: 20px;
  width: auto;
  height: 300px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  padding: 10px;
`;
