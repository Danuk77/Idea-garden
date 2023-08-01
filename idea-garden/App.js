import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./Navigation/tabs";
// import IdeaScreen from "./app/screens/IdeaScreen";
// import CreativeScreen from "./app/screens/CreativeScreen";
// import SocialScreen from "./app/screens/SocialScreen";
// import SettingsScreen from "./app/screens/SettingsScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}