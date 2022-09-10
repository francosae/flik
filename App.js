import { NativeBaseProvider } from "native-base";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExploreScreen, FeedScreen, FriendScreen, ProfileScreen, CameraScreen} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
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

const Tab = createBottomTabNavigator();

function AppContainer(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed" screenOptions={{
          headerShown: false
        }}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Friends" component={FriendScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
