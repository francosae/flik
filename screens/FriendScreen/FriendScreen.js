import { View, Image, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Heading, HStack, Input, VStack, Text, Box, Avatar, Center, AlertDialog, Button, Flex, ScrollView, Stack} from 'native-base'
import { AntDesign } from '@expo/vector-icons';
import { exampleUsers } from './temp';
export default function FriendScreen() {
    const [selected, setSelected] = useState('My Friends')
    return (
        <SafeAreaView>
            <ButtonNav selected={selected} setSelected={setSelected} />
            <ScrollView>
                {selected === 'My Friends' ? <FriendDisplay/> : <></>}
            </ScrollView>
        </SafeAreaView>
    )
}

function ButtonNav({ selected, setSelected }) {
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
      <HStack width={"353px"} justifyContent={"space-evenly"}>
        <Button
          size={"lg"}
          key='My Friends'
          style={{
            borderRadius: 20,
            borderColor: "black",
            backgroundColor: selected === 'My Friends' ? 'black' : 'transparent'
          }}
          onPress={() => setSelected('My Friends')}
        >
         <Text color={selected == 'My Friends' ? 'white' : 'black'}>My Friends</Text>
        </Button>
        <Button
          size={"lg"}
          key='My Circles'
          style={{
            borderRadius: 20,
            borderColor: "black",
            backgroundColor: selected === 'My Circles' ? 'black' : 'transparent'
          }}
        
          onPress={() => setSelected('My Circles')}
        >
         <Text color={selected == 'My Circles' ? 'white' : 'black'}>My Circles</Text>
        </Button>
        <Button
          size={"lg"}
          key='My Requests'
          style={{
            borderRadius: 20,
            borderColor: "black",
            backgroundColor: selected === 'My Requests' ? 'black' : 'transparent'
           }}
          onPress={() => setSelected('My Requests')}
    
        >
          <Text color={selected == 'My Requests' ? 'white' : 'black'}>My Requests</Text>
        </Button>
      </HStack>
    </Stack>
    )
}

function FriendDisplay() {
    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => setIsOpen(false);
  
    const cancelRef = React.useRef(null);

    const removeFriend = (index) => {
        exampleUsers.splice(index , 1)
    }

    return(
        <Center mt={2} maxW='80%' w='80%' alignSelf='center'>
            <Input variant="rounded" placeholder="Search for a friend" />
            <VStack mt={2} space={4}  w='100%' alignSelf='left'>
            {exampleUsers.map((user, index) => {
                return (
                <Button width='100%' justifyContent='space-between' rightIcon={<AntDesign name="close" size={24} color="black" onPress={() => setIsOpen(!isOpen)} />}>
                <HStack key={index} >
                <Avatar bg="indigo.500" alignSelf="left" size="md" source={{
                uri: 'https://placeimg.com/80/80/people'
                }} />
                <VStack space={1} alignItems="left">
                    <Text fontSize='md'>{user.name}</Text>
                    <Text fontSize='md'>{user.at}</Text>
                </VStack>
                <HStack alignSelf='right'>
                </HStack>


                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>Remove Friend</AlertDialog.Header>
                <AlertDialog.Body>
                    <Text>Are you sure you want to remove {user.name}?</Text>
                </AlertDialog.Body>
                <AlertDialog.Footer>
                    <Button.Group space={2}>
                    <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                        Cancel
                    </Button>
                    <Button colorScheme="danger" onPress={() => {onClose(), removeFriend(index)} }>
                        Confirm
                    </Button>
                    </Button.Group>
                </AlertDialog.Footer>
                </AlertDialog.Content>
                </AlertDialog>
                </HStack>
                </Button>
                 )
                 })}
            </VStack>
        </Center>
    )
}