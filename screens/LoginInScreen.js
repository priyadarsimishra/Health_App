import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import firebase from "firebase";

export default class LoginInScreen extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
  };
  signInUser() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log("User signed in");
      })
      .catch((error) => {
        // console.log("This user does not exist");
        this.setState({ errorMessage: error.message });
        // console.log(error.message);
      });
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        <Text>Login In Screen</Text>
        <TextInput
          style={styles.usernameInput}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(email) => {
            this.setState({ email: email });
            this.setState({ errorMessage: "" });
          }}
          value={this.state.email}
        />
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => {
            this.setState({ password: password });
            this.setState({ errorMessage: "" });
          }}
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.loginInButton}
          onPress={() => this.signInUser()}
        >
          <Text style={styles.loginInText}>Login In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpText}>Don't have an Account? Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  usernameInput: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: 300,
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: 300,
    marginTop: 20,
  },
  signUpButton: {
    backgroundColor: "#f00",
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
  },
  signUpText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
  },
  loginInButton: {
    marginTop: 20,
    backgroundColor: "#FF69B4",
    width: 100,
    padding: 10,
    borderRadius: 20,
  },
  loginInText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "800",
    color: "#fff",
  },
});
