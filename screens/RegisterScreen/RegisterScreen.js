import React, { useState } from "react";
// import { auth } from "../../Firebase/Firebase";
import fire from "../../Firebase/Firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, VStack, Text, TextArea, Button } from "native-base";

export default function RegisterScreen({
  navigation,
  isSignedIn,
  setIsSignedIn,
}) {
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
          });
        setIsSignedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView>
      <Box
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text bold fontSize={60} style={{ color: "#AAD6A0" }}>
          Flik.
        </Text>
        <Text
          style={{
            fontWeight: "500",
            position: "relative",
            bottom: 15,
            fontSize: 15,
          }}
        >
          Create a new account:
        </Text>
        <VStack width={"100%"} space={3} alignItems={"center"}>
          <TextArea
            width={"80%"}
            h={10}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            onChangeText={(text) => setEmail(text)}
          />
          <TextArea
            width={"80%"}
            h={10}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            onChangeText={(text) => setUsername(text)}
          />
          <TextArea
            width={"80%"}
            h={10}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            width={"80%"}
            onPress={Register}
            style={{ backgroundColor: "black" }}
          >
            {isSignedIn ? "Logging In..." : "Register"}
          </Button>
          <Text>
            Already have an account?{" "}
            <Text bold onPress={() => navigation.navigate("Login")}>
              Login here.
            </Text>
          </Text>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}
