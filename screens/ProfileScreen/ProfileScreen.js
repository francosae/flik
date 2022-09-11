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

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileHeader />
        <Divider my={2} />
        <PhotoGrid />
      </ScrollView>
    </SafeAreaView>
  );
}

function ProfileHeader() {
  return (
    <VStack space={2} alignItems={"center"} pt={4}>
      <Avatar
        source={{
          uri: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg",
        }}
        size="2xl"
      />
      <Text bold style={{ fontSize: 20 }}>
        David Barcenas
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
      </Box><Box px={0.3} py={0.5}>
        <Image
          alt="User image"
          size="xl"
          source={{ uri: "https://picsum.photos/200" }}
        />
      </Box>
      
    </Flex>
  );
}
