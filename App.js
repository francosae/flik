import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExploreScreen, FeedScreen, FriendScreen, ProfileScreen } from "./screens";
const Stack = createNativeStackNavigator();
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as firebase from "firebase";
import Firebase from "../Firebase/Firebase";

if (firebase.apps.length === 0) {
  firebase.initializeApp(Firebase);
} 

export default function App() {
  return (
    <NativeBaseProvider>
      <AppContainer />
    </NativeBaseProvider>
  );
  }

function AppContainer(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Friends" component={FriendScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}