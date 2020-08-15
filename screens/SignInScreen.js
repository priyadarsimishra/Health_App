import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from "react-native";
import firebase from "firebase";
import { auth } from "../Fire";
import Text from "../styles/Text";
import colors from "../styles/colors";
import * as Animatable from "react-native-animatable";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default class LoginInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      secureText: true,
    };
  }
  signInUser = () => {
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.changeLoggedIn;
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  };
  changeSecureText() {
    this.setState({ secureText: !this.state.secureText });
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/splashbg.png")}
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
              source={require("../assets/loginScreen.png")}
            />
          </Animatable.View>
        </ImageBackground>
        <Animatable.View style={styles.middle} animation="zoomIn">
          <KeyboardAvoidingView
            style={styles.inputContainer}
            behavior="padding"
          >
            <Text extralarge heavy center color={colors.black}>
              Sign In
            </Text>
            <Text medium light color={colors.grey}>
              Please sign in to continue
            </Text>
            <Text small bold center color={colors.red} style={styles.error}>
              {this.state.errorMessage}
            </Text>
            <Text bold semilarge color={colors.black} style={styles.emailtext}>
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
              <Text
                bold
                semilarge
                color={colors.black}
                style={styles.passwordtext}
              >
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
              <Animatable.View style={styles.eye} animation="bounceIn">
                <TouchableOpacity onPress={() => this.changeSecureText()}>
                  {this.state.secureText ? (
                    <Feather name="eye-off" size={24} color={colors.black} />
                  ) : (
                    <Feather name="eye" size={24} color={colors.black} />
                  )}
                </TouchableOpacity>
              </Animatable.View>
            </View>
            <LinearGradient
              colors={[colors.pink, colors.red]}
              style={styles.loginInButton}
            >
              <TouchableOpacity
                style={styles.loginInButton}
                onPress={() => this.signInUser()}
              >
                <Text heavy medium center style={styles.loginInText}>
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
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 35,
    paddingRight: 35,
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
    marginLeft: -5,
    fontSize: 16,
    color: colors.white,
  },
  error: {
    paddingLeft: 30,
    paddingRight: 30,
  },
});
