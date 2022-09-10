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

// import { auth } from "../../Firebase/Firebase";
import fire from "../../Firebase/Firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Register = async () => {
    console.log("here");
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        fire
          .firestore()
          .collection("users")
          .doc(fire.auth().currentUser.uid)
          .set({
            username,
            email,
          })
          .catch((error) => {
            console.log(error);
          });
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
          placeholder="username"
          value={username}
          onChangeText={(text) => setUsername(text)}
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
