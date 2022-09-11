import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, VStack } from "native-base";
import FeedCard from "../../Components/FeedCard";
import { UserFeed } from "../FeedScreen/temp";
export default function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView>
      <VStack alignItems="center">
        <Text pb={2} bold fontSize="2xl">
          Explore
        </Text>
        <ScrollView>
          <View style={{ flex: 1 }}>
          {UserFeed.map((user, index) => {
        return ( <FeedCard user={user} />)  
    })}
          </View>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}
