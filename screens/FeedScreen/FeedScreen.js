import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HStack, VStack, Button, Text, ScrollView, Stack } from "native-base";
import { RefreshControl, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import FeedCard from "../../Components/FeedCard";
import { useState } from "react";
import { UserFeed } from "./temp";
import { UserFeed2 } from "./temp";
export default function FeedScreen() {
  const [selected, setSelected] = useState('All Friends')

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  return (
    <SafeAreaView>
      <ButtonNav selected={selected} setSelected={setSelected} />
      <Header />
      <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
      {selected === 'All Friends' ? UserFeed.map((user, index) => {
        return ( <FeedCard user={user} key={index} />)  
    }) : <></>}
     {selected === 'Shellhacks' ? UserFeed2.map((user, index) => {
        return ( <FeedCard user={user} />)  
    }) : <></>}
         {selected === 'Car Guys' ? UserFeed2.map((user, index) => {
        return ( <FeedCard user={user} />)  
    }) : <></>}
      </ScrollView>
    </SafeAreaView>
  );
}

function Header() {
  const [promptActive, setPromptActive] = useState(false);
  return (
    <Stack direction="column" space={1} alignItems="center" pb={2}>
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
        key='All Friends'
        
        style={{
          borderRadius: 20,
          borderColor: "black",
          backgroundColor: selected === 'All Friends' ? 'black' : 'transparent'
        }}
        onPress={() => setSelected('All Friends')}
      >
       <Text color={selected == 'All Friends' ? 'white' : 'black'}>All Friends</Text>
      </Button>
      <Button
        size={"lg"}
        key='Shellhacks'
        style={{
          borderRadius: 20,
          borderColor: "black",
          backgroundColor: selected === 'Shellhacks' ? 'black' : 'transparent'
        }}
        
        onPress={() => setSelected('Shellhacks')}
      >
       <Text color={selected == 'Shellhacks' ? 'white' : 'black'}>ShellHacks</Text>
      </Button>
      <Button
        size={"lg"}
        key='Car Guys'
        style={{
          borderRadius: 20,
          borderColor: "black",
          backgroundColor: selected === 'Car Guys' ? 'black' : 'transparent'
         }}
        onPress={() => setSelected('Car Guys')}
  
      >
        <Text color={selected == 'Car Guys' ? 'white' : 'black'}>Car Guys</Text>
      </Button>
    </HStack>
  </Stack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
