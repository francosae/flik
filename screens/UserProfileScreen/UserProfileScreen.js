import {
    Avatar,
    Divider,
    HStack,
    Text,
    VStack,
    Image,
    ScrollView,
    Flex,
    Button,
    Box,
    Alert,
  } from "native-base";
  import React, { useState} from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function UserProfileScreen({ route, navigation }) {
    const { User } = route.params; 
    return (
      <SafeAreaView>
        <ScrollView>
          <ProfileHeader user={User}/>
          <Divider my={2} />
          <PhotoGrid user={User} />
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  function ProfileHeader({ user }) {
    const [request, setRequest] = useState(false)

    return (
      <VStack space={2} alignItems={"center"} pt={4}>
        <Avatar
          source={{
            uri: "https://placeimg.com/80/80/people",
          }}
          size="2xl"
        />
        <Text bold style={{ fontSize: 20 }}>
          {user.name} / {user.at}
        </Text>
        <Text>I'm an FIU student that loves to code!</Text>
        <HStack space={5}>
          <VStack alignItems={"center"}>
            <Text style={{ fontWeight: "500" }}>Posts</Text>
            <Text style={{ fontWeight: "300" }}>100</Text>
          </VStack>
          <VStack alignItems={"center"}>
            <Text style={{ fontWeight: "500" }}>Friends</Text>
            <Text style={{ fontWeight: "300" }}>200</Text>
          </VStack>
        </HStack>
        <HStack pb={2} space={4} style={{ width: "80%" }} justifyContent='space-evenly'>
        {request === false ?
        <Button style={{ backgroundColor: "black", width: "50%" }} onPress={ () => setRequest(true)}>
            Add Friend
        </Button> : 
        <>
        <Alert w="55%" variant="outline-light" colorScheme="success" status="success">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
            <HStack space={2} flexShrink={1} alignItems="center">
              <Alert.Icon />
              <Text color='success'>
                Friend request sent! 
              </Text>
            </HStack>
          </HStack>
        </VStack>
        </Alert>
        </>
                  }

          <Button style={{ backgroundColor: "black", width: "45%" }}>
            Add to Circle
          </Button>
        </HStack>
      </VStack>
    );
  }
  
  function PhotoGrid() {
    return (
      <Flex direction="row" width="100%" flexWrap px={0.5} py={0.5}>
        <Box px={0.3} py={0.5}>
          <Image
            alt="User image"
            size="xl"
            source={{ uri: "https://picsum.photos/200" }}
          />
        </Box>
        <Box px={0.3} py={0.5}>
          <Image
            alt="User image"
            size="xl"
            source={{ uri: "https://picsum.photos/200" }}
          />
        </Box>
        <Box px={0.3} py={0.5}>
          <Image
            alt="User image"
            size="xl"
            source={{ uri: "https://picsum.photos/200" }}
          />
        </Box>
        <Box px={0.3} py={0.5}>
          <Image
            alt="User image"
            size="xl"
            source={{ uri: "https://picsum.photos/200" }}
          />
        </Box>
        <Box px={0.3} py={0.5}>
          <Image
            alt="User image"
            size="xl"
            source={{ uri: "https://picsum.photos/200" }}
          />
        </Box>
        <Box px={0.3} py={0.5}>
          <Image
            alt="User image"
            size="xl"
            source={{ uri: "https://picsum.photos/200" }}
          />
        </Box>
      </Flex>
    );
  }
  