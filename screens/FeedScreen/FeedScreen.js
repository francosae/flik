import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HStack, VStack, Button, Text, ScrollView, Stack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import FeedCard from "../../Components/FeedCard"
import { useState } from "react";

export default function FeedScreen() {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </ScrollView>
    </SafeAreaView>
  );
}

function Header() {
  const [promptActive, setPromptActive] = useState(false);

  return (
    <Stack direction="column" space={1} alignItems="center" pb={2}>
      <Text
        fontWeight={"700"}
        style={{
          fontSize: 34,
          color: "#AAD6A0",
          lineHeight: "42.84px",
        }}
      >
        Flik.
      </Text>
      <HStack width={"353px"} justifyContent={"space-between"}>
        <Button
          size={"lg"}
          style={{
            backgroundColor: "black",
            borderRadius: 18,
          }}
        >
          All friends
        </Button>
        <Button size={"lg"} variant="unstyled">
          Circle Name
        </Button>
        <Button size={"lg"} variant="unstyled">
          Circle Name
        </Button>
      </HStack>
      <HStack height={"38px"} width={"353px"} justifyContent={"space-between"}>
        <Button
          variant="unstyled"
          endIcon={
            promptActive ? (
              <AntDesign name="up" size={18} color="black" />
            ) : (
              <AntDesign name="down" size={18} color="black" />
            )
          }
          onPress={() => setPromptActive(!promptActive)}
        >
          View Today's Hunt
        </Button>
        <Text
          fontWeight={"700"}
          style={{ fontSize: 30, lineHeight: "37.8px", color: "#AAD6A0" }}
        >
          10:30:00
        </Text>
      </HStack>
      {promptActive && <Prompt />}
    </Stack>
  );
}

function Prompt() {
  return (
    <Text pb={3} fontSize={12} width={"273px"} textAlign="center">
      Take a photo of something that reminds you of your best friend.
    </Text>
  );
}
