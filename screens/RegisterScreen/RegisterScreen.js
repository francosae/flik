import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";

import { authentication } from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Register = () => {
    console.log("here");
    createUserWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Button title="register" onPress={Register}></Button>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    bottom: -200,
    justifyContent: "center",
    alignItems: "center",
  },
});
