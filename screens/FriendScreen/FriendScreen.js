import { View, Image, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Divider, HStack, Input, VStack, Text, Box, Avatar, Center, AlertDialog, Button, Flex, ScrollView, Stack, useDisclose, Stagger } from 'native-base'
import { AntDesign } from '@expo/vector-icons';
import { exampleUsers, exampleCircles } from './temp';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export default function FriendScreen({ navigation }) {
    const [selected, setSelected] = useState('My Friends')

    return (
        <SafeAreaView>
            <ButtonNav selected={selected} setSelected={setSelected} />
            <ScrollView>
                {selected === 'My Friends' ? <FriendDisplay navigation={navigation}/> : <></>}
                {selected === 'My Circles' ? <CircleDisplay selected={selected}/> : <></>}
                {selected === 'My Requests' ? <RequestDisplay/> : <></>}
            </ScrollView>
        </SafeAreaView>
    )
}

function ButtonNav({ selected, setSelected }) {
    
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

function FriendDisplay({ navigation }) {
    
  const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => setIsOpen(false);
  
    const cancelRef = React.useRef(null);

    const removeFriend = (index) => {
        exampleUsers.splice(index , 1)
    }

    return(
        <Center mt={2} maxW='80%' w='80%' alignSelf='center'>
            <Input variant="rounded" size='lg' placeholder="Search for a friend" />
            <VStack mt={2} space={4}  w='100%' alignSelf='left'>
            <Text w='80%' bold>MY FRIENDS ({exampleUsers.length.toString()})</Text>
            {exampleUsers.map((user, index) => {
                return (
                <Button width='100%' variant='ghost' onPress={() => navigation.navigate('UserProfile',
                {
                  User: user
                })} colorScheme="success"
                justifyContent='space-between' rightIcon={<AntDesign name="close" size={24} color="black"
                 onPress={() => navigation.navigate('MyFriends')} />} key={index}
                 >
                <HStack key={index}>
                <Avatar bg="indigo.500" alignSelf="left" size="md" source={{
                uri: 'https://placeimg.com/80/80/people'
                }} />
                <VStack space={1} alignItems="left">
                    <Text fontSize='md'>{user.name}</Text>
                    <Text fontSize='md'>{user.at}</Text>
                </VStack>
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content>
                <AlertDialog.CloseButton />
                <AlertDialog.Header>Remove Friend</AlertDialog.Header>
                <AlertDialog.Body>
                    <Text>Are you sure you want to remove {index}?</Text>
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


function CircleDisplay() {
  const [text, setText] = useState("not");
  const cancelRef = React.useRef(null);
  const navigation = useNavigation(); 
  const [showModal, setShowModal] = useState(false);
  
  return(<>
    <Center mt={2} maxW='80%' w='80%' alignSelf='center'>
      <Flex direction='row' flexWrap={true} textAlign='center' justifyContent='space-around'>
        <Text w='90%' bold>MY CIRCLES ({exampleCircles.length.toString()})</Text>
        {exampleCircles.map((circle, index) => {
            return (
                <Flex direction='row' mt={2} flexWrap={true} alignItems='left' key={index}>
                  <Button variant='ghost' onPress={() => navigation.navigate('CircleProfile',
                  {
                    Circle: circle
                  }) } colorScheme="success" >
                    <VStack mt={2} alignItems='left' textAlign='center' key={index}>
                        <Avatar bg="indigo.500" alignSelf="center" size="md" source={{
                        uri: 'https://placeimg.com/80/80/people'
                        }} />
                        <Text bold fontSize='md'>{circle.name}</Text>
                    </VStack>
                  </Button>
                </Flex>
            )
        })}
      </Flex>
    </Center>
    </>
  )
}


export function CircleInfo(){
  return (
    <SafeAreaView>
    <Center mt={2} maxW='80%' w='80%' alignSelf='center'>
      <Flex direction='row' flexWrap={true} textAlign='center' justifyContent='space-around'>
        <Avatar bg="indigo.500" alignSelf="center" size="md" source={{
          uri: 'https://placeimg.com/80/80/people'
          }} />


      </Flex>
    </Center>
    </SafeAreaView>
  )
}

function RequestDisplay(){
  return(
      <Center mt={2} maxW='80%' w='80%' alignSelf='center'>
            <Input variant="rounded" size='lg' placeholder="Add a friend" />
            <Text bold size='sm' w='100%' mt={2}>FRIEND REQUESTS (0)</Text>
            <Button w='100%' h='50px' mt={-350} colorScheme='secondary' >
              You have no friends!
              Try adding some!
            </Button>
      </Center>
  )
}