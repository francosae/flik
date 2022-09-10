import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'native-base'
export default function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>ExploreScreen</Text>
      <Button onPress={ () => navigation.navigate('Feed')}> Test </Button>
      <Button onPress={() => navigation.navigate("Feed")}>Feed Page</Button>
    </SafeAreaView>
  )
}