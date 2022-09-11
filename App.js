import { NativeBaseProvider } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
      {isSignedIn ? (
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="Feed" component={FeedScreen} />
          <Tab.Screen name="Explore" component={ExploreScreen} />
          <Tab.Screen name="Friends" component={FriendScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Camera" component={CameraScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Login"
            children={(props) => (
              <LoginScreen
                {...props}
                setIsSignedIn={setIsSignedIn}
                isSignedIn={isSignedIn}
              />
            )}
          />
          <Stack.Screen
            name="Register"
            children={(props) => (
              <RegisterScreen
                {...props}
                setIsSignedIn={setIsSignedIn}
                isSignedIn={isSignedIn}
              />
            )}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
