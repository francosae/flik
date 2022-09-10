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
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function LoginScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    console.log("here");
    signInWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        setIsSignedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Logout = () => {
    signOut(authentication)
      .then((res) => {
        setIsSignedIn(false);
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
        {isSignedIn === true ? (
          <Button title="logout" onPress={Logout}></Button>
        ) : (
          <Button title="login" onPress={Login}></Button>
        )}
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
