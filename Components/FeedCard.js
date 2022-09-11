import React from "react";
import { HStack, VStack, Text, Avatar, Image } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

export default function FeedCard({ user }) {
  return (
    <VStack space={3} px={4} paddingBottom={4}>
      <HStack space={2} alignItems="center">
      <Avatar 
          source={{ 
            uri: "https://placeimg.com/80/80/people",
          }}    
          size="sm"    
        />
        <Text bold>{user?.Username}</Text>
      </HStack>
      <Image
        source={{
          uri: "https://picsum.photos/200",
        }}
        alt="Alternate Text"
        width={"364px"}
        height={"420px"}
        borderRadius={"13px"}
      />
      <HStack space={2}>
        <FontAwesome5 name="heart" size={24} />
        <FontAwesome5 name="comment-dots" size={24} color="black" />
      </HStack>
      <VStack>
        <Comment
          user={user?.Username}
          comment={"look at this picture i took!"}
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
