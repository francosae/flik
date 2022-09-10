import React from "react";
import { HStack, VStack, Text, Avatar, Image } from "native-base";

export default function FeedCard() {
  return (
    <VStack space={3} px={4} paddingBottom={4}>
      <HStack space={2} alignItems="center">
        <Avatar size="sm" />
        <Text bold>dabarcenas</Text>
      </HStack>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
        }}
        alt="Alternate Text"
        width={"364px"}
        height={"420px"}
        borderRadius={"13px"}
      />
      <VStack>
        <Comment
          user={"dabarcenas"}
          comment={"I took a picture of my silly cat Jorge!"}
        />
        <Text>View all comments...</Text>
        <Comment user={"reibrowner"} comment={"hahaha epic"} />
        <Comment user={"nanaokae"} comment={"WTF I love your cat"} />
      </VStack>
    </VStack>
  );
}

function Comment({ user, comment }) {
  return (
    <HStack space={1}>
      <Text bold>{user}</Text>
      <Text>{comment}</Text>
    </HStack>
  );
}
