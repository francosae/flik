import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { TextInput, Button, StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export class Register extends Component() {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }
  onSignUp() {
    const { username, email, password } = this.state;
    firebase
      .auth()
      .createUsernameWithEmailAndPassword(email, password)
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
          placeholder="username"
          onTextChange={(username) => this.setSate({ username })}
        />
        <TextInput
          placeholder="email"
          onTextChange={(email) => this.setSate({ email })}
        />
        <TextInput
          placeholder="username"
          secureTextEntry={true}
          onTextChange={(password) => this.setSate({ password })}
        />
        <Button onClick={() => this.onSignUp()} title="Sign up" />
      </View>
    );
  }
}
export default Register;
