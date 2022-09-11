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
    AlertDialog
  } from "native-base";
  import React from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { exampleCircles } from "../FriendScreen/temp";
  import { useNavigation } from '@react-navigation/native';

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
    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => setIsOpen(false);
  
    const [inviteOpen, setInviteOpen] = React.useState(false);

    const inviteClose = () => setInviteOpen(false);

    const cancelRef = React.useRef(null);
    const navigation = useNavigation(); 
    
    return (    
      <VStack space={2} alignItems={"center"}    pt={4}>
        <Avatar 
          source={{ 
            uri: "https://placeimg.com/80/80/   people",
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
          <Button colorScheme='danger' onPress={() => setIsOpen(!isOpen)} style={{ width: "50%" }}>
            Leave Circle
          </Button>
          <Button colorScheme='success' onPress={() => setInviteOpen(!inviteOpen)} style={{ width: "50%" }}>
            Send Invitation
          </Button>
        </HStack>

        <AlertDialog leastDestructiveRef={cancelRef} isOpen={inviteOpen} onClose={inviteClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header><Text>Leave {circle.name}</Text></AlertDialog.Header>
          <AlertDialog.Body>
            <Text>
            This will remove you from your friend circle, <Text bold>{circle.name}</Text>. You will no longer be able to
            view posts from this circle.
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger">
                Leave
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog>

        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header><Text>Leave {circle.name}</Text></AlertDialog.Header>
          <AlertDialog.Body>
            <Text>
            This will remove you from your friend circle, <Text bold>{circle.name}</Text>. You will no longer be able to
            view posts from this circle.
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={() => {onClose, navigation.navigate('FriendDisplay', {
                circleLeft: circle
              }), exampleCircles.splice(1, 1)}}>
                Leave
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog>

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
  