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
  } from "native-base";
  import React from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function CircleProfileScreen({ route, navigation }) {
    const { Circle } = route.params; 
    return (
      <SafeAreaView>
        <ScrollView>
          <ProfileHeader circle={Circle}/>
          <Divider my={2} />
          <PhotoGrid circle={Circle} />
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  function ProfileHeader({ circle }) {
    return (
      <VStack space={2} alignItems={"center"} pt={4}>
        <Avatar
          source={{
            uri: "https://placeimg.com/80/80/people",
          }}
          size="2xl"
        />
        <Text bold style={{ fontSize: 20 }}>
          {circle.name}
        </Text>
        <HStack space={5}>
          <VStack alignItems={"center"}>
            <Text style={{ fontWeight: "500" }}>Members</Text>
            <Text style={{ fontWeight: "300" }}>{circle.userCount}</Text>
          </VStack>
          <VStack alignItems={"center"}>
            <Text style={{ fontWeight: "500" }}> Total Posts</Text>
            <Text style={{ fontWeight: "300" }}>100</Text>
          </VStack>
        </HStack>
        <HStack pb={2} space={4} style={{ width: "80%" }}>
          <Button style={{ backgroundColor: "#FF3636", width: "50%" }}>
            Leave Circle
          </Button>
          <Button style={{ backgroundColor: "black", width: "50%" }}>
            Send Invitation
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
            source={{ uri: "https://placeimg.com/80/80/people" }}
          />
        </Box>
        <Box px={0.3} py={0.5}>
          <Image
            alt="User image"
            size="xl"
            source={{ uri: "https://placeimg.com/80/80/people" }}
          />
        </Box>
        <Box px={0.3} py={0.5}>
          <Image
            alt="User image"
            size="xl"
            source={{ uri: "https://placeimg.com/80/80/people" }}
          />
        </Box>
        <Box px={0.3} py={0.5}>
          <Image
            alt="User image"
            size="xl"
            source={{ uri: "https://placeimg.com/80/80/people" }}
          />
        </Box>
        <Box px={0.3} py={0.5}>
          <Image
            alt="User image"
            size="xl"
            source={{ uri: "https://placeimg.com/80/80/people" }}
          />
        </Box>
        <Box px={0.3} py={0.5}>
          <Image
            alt="User image"
            size="xl"
            source={{ uri: "https://placeimg.com/80/80/people" }}
          />
        </Box>
      </Flex>
    );
  }
  