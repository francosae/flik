import { NativeBaseProvider } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ExploreScreen,
  FeedScreen,
  FriendScreen,
  ProfileScreen,
  CameraScreen,
  RegisterScreen,
  LoginScreen,
} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { getApps, initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase/Firebase";
import { useState } from "react";

if (getApps().length < 1) {
  initializeApp(firebaseConfig);
  // Initialize other firebase products here
}

export default function App() {
  return (
    <NativeBaseProvider>
      <AppContainer />
    </NativeBaseProvider>
  );
}

const Tab = createBottomTabNavigator();

function AppContainer() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Friends" component={FriendScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
        <Tab.Screen
          name="Login"
          children={(props) => (
            <LoginScreen
              {...props}
              setIsSignedIn={setIsSignedIn}
              isSignedIn={isSignedIn}
            />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
