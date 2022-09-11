import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, VStack } from "native-base";
import FeedCard from "../../Components/FeedCard";
export default function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView>
      <VStack alignItems="center">
        <Text pb={2} bold fontSize="2xl">
          Explore
        </Text>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </View>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}
