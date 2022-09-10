import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HStack, VStack, Button, Text, ScrollView, Stack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import FeedCard from "../../Components/FeedCard";

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
  return (
    <Stack direction="column" space={1} alignItems="center">
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
          endIcon={<AntDesign name="down" size={24} color="black" />}
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
    </Stack>
  );
}
