import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, VStack, Text, TextArea, Button } from "native-base";
import { authentication } from "../../Firebase/Firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import fire from "../../Firebase/Firebase";

export default function LoginScreen({ navigation, isSignedIn, setIsSignedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async () => {
    console.log("here");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        fire
          .firestore()
          .collection("users")
          .doc(fire.auth().currentUser.uid)
          .set({
            email,
            password,
          });
        setIsSignedIn(true);
      })
      .catch((error) => {
        console.log(error);
        setIsSignedIn(false);
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
          The photo hunting app
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            width={"80%"}
            onPress={Login}
            style={{ backgroundColor: "black" }}
          >
            {isSignedIn ? "Logging In..." : "Login"}
          </Button>
          <Text>
            Don't have an account?{" "}
            <Text bold onPress={() => navigation.navigate("Register")}>
              Register here.
            </Text>
          </Text>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}
