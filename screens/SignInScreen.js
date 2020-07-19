import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from "react-native";
import firebase from "firebase";
import Text from "../styles/Text";
import colors from "../styles/Colors";
import * as Animatable from "react-native-animatable";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default class LoginInScreen extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
    secureText: true,
  };
  signInUser() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate("AllScreens");
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  }
  changeSecureText() {
    this.setState({ secureText: !this.state.secureText });
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("/Users/priyadarsimishra/Desktop/React Native Programming/HealthApp/assets/splashbg.png")}
          style={styles.headerImage}
          imageStyle={{
            borderRadius: 500,
            width: 500,
            height: 500,
            marginTop: -280,
            marginLeft: -43,
          }}
        >
          <Animatable.View style={styles.header} animation="slideInDown">
            <Image
              animation="bounceIn"
              style={styles.logo}
              source={require("/Users/priyadarsimishra/Desktop/React Native Programming/HealthApp/assets/loginScreen.png")}
            />
          </Animatable.View>
        </ImageBackground>
        <Animatable.View style={styles.middle} animation="zoomIn">
          <KeyboardAvoidingView
            style={styles.inputContainer}
            behavior="padding"
          >
            <Text extralarge heavy color={colors.black}>
              Sign In
            </Text>
            <Text medium light color={colors.grey}>
              Please sign in to continue
            </Text>
            <Text bold medium color={colors.red}>
              {this.state.errorMessage}
            </Text>

            <Text bold large color={colors.black} style={styles.emailtext}>
              Email
            </Text>
            <View>
              <FontAwesome
                name="envelope"
                size={20}
                color={colors.black}
                style={styles.envelope}
              />
              <TextInput
                style={styles.usernameInput}
                placeholder=""
                autoCapitalize="none"
                onChangeText={(email) => {
                  this.setState({ email: email });
                  this.setState({ errorMessage: "" });
                }}
                value={this.state.email}
              />
              <Text bold large color={colors.black} style={styles.passwordtext}>
                Password
              </Text>
            </View>
            <View>
              <FontAwesome
                name="lock"
                size={28}
                color={colors.black}
                style={styles.lock}
              />
              <TextInput
                style={styles.passwordInput}
                placeholder=""
                autoCapitalize="none"
                secureTextEntry={this.state.secureText ? true : false}
                onChangeText={(password) => {
                  this.setState({ password: password });
                  this.setState({ errorMessage: "" });
                }}
                value={this.state.password}
              />
              <TouchableOpacity onPress={() => this.changeSecureText()}>
                {this.state.secureText ? (
                  <Feather
                    name="eye-off"
                    size={24}
                    color={colors.black}
                    style={styles.eye}
                  />
                ) : (
                  <Feather
                    name="eye"
                    size={24}
                    color={colors.black}
                    style={styles.eye}
                  />
                )}
              </TouchableOpacity>
            </View>
            <LinearGradient
              colors={[colors.pink, colors.red]}
              style={styles.loginInButton}
            >
              <TouchableOpacity
                style={styles.loginInButton}
                onPress={() => this.signInUser()}
              >
                <Text heavy medium style={styles.loginInText}>
                  Login
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => this.props.navigation.navigate("SignUpScreen")}
            >
              <Text heavy medium style={styles.signUpText}>
                Don't have an Account? Sign Up
              </Text>
            </TouchableOpacity>
            <View style={styles.footer}></View>
          </KeyboardAvoidingView>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: -180,
  },
  header: {
    flex: 1,
  },
  headerImage: {
    flex: 1,
  },
  middle: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  emailtext: {
    marginRight: 250,
    top: 12,
  },
  passwordtext: {
    marginRight: 212,
    top: 12,
  },
  logo: {
    width: 125,
    height: 125,
    borderRadius: 300,
    borderWidth: 6,
    borderColor: colors.lightpurple,
    marginLeft: 140,
    marginTop: 150,
  },
  usernameInput: {
    borderWidth: 2,
    borderRadius: 18,
    borderColor: colors.black,
    padding: 10,
    paddingLeft: 35,
    width: 300,
    marginTop: -6,
  },
  passwordInput: {
    borderWidth: 2,
    borderRadius: 18,
    borderColor: colors.black,
    padding: 10,
    paddingLeft: 35,
    width: 300,
    marginTop: -9,
  },
  envelope: {
    top: 22,
    left: 10,
  },
  lock: {
    top: 25,
    left: 10,
  },
  eye: {
    left: 267,
    top: -33,
  },
  signUpButton: {
    borderRadius: 20,
    padding: 10,
    marginTop: 50,
  },
  signUpText: {
    color: colors.black,
  },
  loginInButton: {
    marginTop: 2,
    // backgroundColor: "#FF69B4",
    width: 300,
    padding: 5,
    borderRadius: 20,
  },
  loginInText: {
    textAlign: "center",
    marginLeft: -5,
    fontSize: 16,
    color: colors.white,
  },
});
