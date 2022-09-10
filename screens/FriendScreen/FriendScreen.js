import { View, Text, Image, StyleSheet  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Heading, HStack, Input, VStack } from 'native-base'

const testData = [
    {
        name: 'Julia Sherman',
        at: '@juliaroo',
    },
    {
        name: 'Miss Lady',
        at: '@miss',
    },
    {
        name: 'Mark Keeper',
        at: '@mark',
    },
    {
        name: 'Person McPerson',
        at: '@person',
    }
]

export default function FriendScreen() {
  return (
    <SafeAreaView>
      <VStack space={4} alignItems="center">
        <Text fontSize="xl">Your friends</Text>
        <Input maxW="80%" size="md" placeholder="Search your friends" />
      </VStack>

      <VStack maxW="80%" alignItems="left">
        <Text bold fontSize="md">MY FRIENDS</Text>
      </VStack>

      <VStack space={4} alignItems="center">
        {testData.map((data, index) => {
            return (
                <HStack alignItems="center" key={index}>
                <VStack space={1} alignItems="center">
                    <Text fontSize='md'>{data.name}</Text>
                    <Text fontSize='md'>{data.at}</Text>
                </VStack>
                <Image style={styles.profPic} source={{uri: 'https://placeimg.com/80/80/people'}} />
                </HStack>
            )
        })}
      </VStack  >

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    profPic: {
      width: 32,
      height: 32,
    },
  });
