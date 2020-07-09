import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import firebase from "firebase";
import firestore from "firebase/firestore";
import Text from "../styles/Text";
import colors from "../styles/Colors";
// now we dont need react native's Text because return a Text
// component from react native from the method anyways

export default class SignUpScreen extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    uid: "",
    errorMessage: "",
  };
  saveData = () => {};
  createUser = () => {
    if (
      this.state.name != "" &&
      this.state.age != "" &&
      this.state.weight != ""
    ) {
      if (!(parseInt(this.state.age) < 5 || parseInt(this.state.weight) < 10)) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then((userCredentials) => {
            this.setState({ uid: firebase.auth().currentUser.uid });
            //save the data to firestore
            let db = firebase
              .firestore()
              .collection("users")
              .doc(this.state.uid);
            db.set({
              name: this.state.name,
              age: this.state.age,
              weight: this.state.weight,
            });
            // Set displayName and navigate the next screen plus
            if (userCredentials.user) {
              userCredentials.user
                .updateProfile({
                  displayName: this.state.name,
                })
                .then(() => {
                  this.props.navigation.navigate("ExtraInfo");
                });
            }
          })
          .catch((error) => {
            this.setState({ authComplete: false });
            this.setState({ errorMessage: error.message });
          });
      } else {
        this.setState({
          errorMessage:
            "You must be 5 years or older and weight 10 pounds or more",
        });
      }
    } else {
      this.setState({ errorMessage: "All Information must be filled in!" });
    }
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        <Text large heavy color={colors.black}>
          Sign Up Screen
        </Text>
        <TextInput
          style={styles.createNameInput}
          placeholder="Enter your name"
          autoCapitalize="none"
          onChangeText={(name) => {
            this.setState({ name: name });
            this.setState({ errorMessage: "" });
          }}
          value={this.state.name}
        />
        <TextInput
          style={styles.createUsernameInput}
          placeholder="Choose a Email"
          autoCapitalize="none"
          onChangeText={(email) => {
            this.setState({ email: email });
            this.setState({ errorMessage: "" });
          }}
          value={this.state.email}
        />
        <TextInput
          style={styles.createPasswordInput}
          placeholder="Choose a Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(password) => {
            this.setState({ password: password });
            this.setState({ errorMessage: "" });
          }}
          value={this.state.password}
        />
        <TextInput
          style={styles.enterAgeInput}
          placeholder="Enter Age"
          numeric
          value
          keyboardType="numeric"
          onChangeText={(age) => {
            this.setState({ age: age });
            this.setState({ errorMessage: "" });
          }}
          value={this.state.age}
        />
        <TextInput
          style={styles.enterWeightInput}
          placeholder="Enter Weight"
          numeric
          value
          keyboardType="numeric"
          onChangeText={(weight) => {
            this.setState({ weight: weight });
            this.setState({ errorMessage: "" });
          }}
          value={this.state.weight}
        />
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => {
            this.createUser();
          }}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
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
  createUsernameInput: {
    marginTop: 20,
    padding: 10,
    width: 300,
    borderWidth: 1,
    borderColor: "#000",
  },
  createNameInput: {
    marginTop: 20,
    padding: 10,
    width: 300,
    borderWidth: 1,
    borderColor: "#000",
  },
  createPasswordInput: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: 300,
    marginTop: 20,
  },
  enterAgeInput: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: 100,
    marginTop: 20,
  },
  enterWeightInput: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: 150,
    marginTop: 20,
  },
  signUpButton: {
    marginTop: 20,
    backgroundColor: "#f00",
    padding: 10,
    width: 100,
    borderRadius: 30,
  },
  signUpText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "800",
  },
});
