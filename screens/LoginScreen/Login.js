import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { TextInput, Button, StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export class Login extends Component() {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }
  onSignUp() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onTextChange={(email) => this.setSate({ email })}
        />
        <TextInput
          placeholder="username"
          secureTextEntry={true}
          onTextChange={(password) => this.setSate({ password })}
        />
        <Button onClick={() => this.onSignUp()} title="Sign In" />
      </View>
    );
  }
}
export default Login;
