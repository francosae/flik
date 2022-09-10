import { View, Image, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Heading, HStack, Input, VStack, Text, Box, Avatar, Center, AlertDialog, Button, Flex, ScrollView, Stack} from 'native-base'
import { AntDesign } from '@expo/vector-icons';

export default function FriendScreen() {
    return (
        <SafeAreaView>
            <ButtonNav/>
        </SafeAreaView>
    )
}

function ButtonNav() {
    const [selected, setSelected] = useState('My Friends')

    useEffect(() => {
        Alert.alert(selected)
    }, [selected, setSelected])
    
    return (
    <Stack direction="column" space={1} alignItems="center" pb={2}>
      <Text
        fontWeight={"700"}
        style={{
          fontSize: 24,
          color: "#AAD6A0",
          lineHeight: "42.84px",
        }}
      >
        Flik.
      </Text>
      <HStack width={"353px"} justifyContent={"space-between"}>
        <Button
          size={"lg"}
          key='My Friends'
          style={{
            borderRadius: 25,
          }}
          onPress={() => setSelected('My Friends')}
          variant={selected == 'My Friends' ? 'solid' : 'outline'}
        >
         My Friends
        </Button>
        <Button
          size={"lg"}
          key='My Circles'
          style={{
            borderRadius: 25,
          }}
        
          onPress={() => setSelected('My Circles')}
          variant={selected == 'My Circles' ? 'solid' : 'outline'}
        >
         My Circles
        </Button>
        <Button
          size={"lg"}
          key='My Requests'
          style={{
            borderRadius: 25,
          }}
          onPress={() => setSelected('My Requests')}
          variant={selected == 'My Requests' ? 'solid' : 'outline'}
        >
          My Requests
        </Button>
      </HStack>
    </Stack>
    )
}
