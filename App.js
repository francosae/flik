import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExploreScreen, FeedScreen, FriendScreen, ProfileScreen } from "./screens";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <AppContainer />
    </NativeBaseProvider>
  );
  }

function AppContainer(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Explore" component={ExploreScreen} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} screenOptions={{ headerShown: false }}/>
        <Stack.Screen name="Friends" component={FriendScreen} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="Feed" component={FeedScreen} screenOptions={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}