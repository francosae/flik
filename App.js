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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

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
const Stack = createNativeStackNavigator();

function AppContainer() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="Feed"
            component={FeedScreen}
            options={{
              tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarIcon: () => (
                <FontAwesome name="search" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Camera"
            component={CameraScreen}
            options={{
              tabBarIcon: () => (
                <Entypo name="camera" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Friends"
            component={FriendScreen}
            options={{
              tabBarIcon: () => (
                <Ionicons name="people" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: () => (
                <Ionicons name="person-circle-sharp" size={24} color="black" />
              ),
            }}
          />
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
