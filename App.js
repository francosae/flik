import { NativeBaseProvider } from "native-base";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExploreScreen, FeedScreen, FriendScreen, ProfileScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppContainer />
    </NativeBaseProvider>
  );
  }

const Tab = createBottomTabNavigator();

function AppContainer(){
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed" screenOptions={{
          headerShown: false
        }}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Friends" component={FriendScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}