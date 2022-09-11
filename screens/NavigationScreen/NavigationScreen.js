import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import FriendScreen from '../FriendScreen/FriendScreen';
import UserProfileScreen from '../UserProfileScreen/UserProfileScreen';
import CircleProfileScreen from '../CircleProfileScreen/CircleProfileScreen';

export default function NavigationScreen() {
    const Stack = createNativeStackNavigator ();

  return (
      <Stack.Navigator
      initialRouteName="FriendDisplay"
      screenOptions={{
        headerShown: false
      }}>
                <Stack.Screen name="FriendDisplay" component={FriendScreen} />
                <Stack.Screen name="UserProfile" component={UserProfileScreen} />
                <Stack.Screen name="CircleProfile" component={CircleProfileScreen} />
      </Stack.Navigator> 
  )
}

