import React, { useState } from "react";
import { TextInput, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { authentication } from "../../Firebase/Firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function LoginScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
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
    <SafeAreaView>
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
    </SafeAreaView>
  );
}
