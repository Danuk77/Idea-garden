
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider } from "react-redux";
import { useFonts } from 'expo-font';

// Firebase imports
import { initializeApp } from "firebase/app";

// Screens
import Tabs from "./Navigation/tabs";
import LogInScreen from "./app/screens/LogInScreen";
import RegisterAccountScreen from "./app/screens/RegisterAccountScreen";

// Redux store
import store from "./redux/store";

// Firebase configuration information
const firebaseConfig = {
  apiKey: "AIzaSyAomQixQ9gGMNCYeYoeo66kFWYWrQfEN2g",
  authDomain: "idea-garden-a35f6.firebaseapp.com",
  projectId: "idea-garden-a35f6",
  storageBucket: "idea-garden-a35f6.appspot.com",
  messagingSenderId: "615250599761",
  appId: "1:615250599761:web:40bd4571838df549197d70",
  measurementId: "G-3QF8JBH91H"
};

// Initialize Firebase
const firebaseReference = initializeApp(firebaseConfig);

// const Stack = createNativeStackNavigator();

export default function App() {

  // Set up the font for the app
  // Code for importing font is extracted from expo-font tutorial
  const [fontsLoaded] = useFonts({
    'ideaGardenFont': require('./assets/Fonts/anek.ttf'),
  });

  if(!fontsLoaded){
    return (<Text>Loading...</Text>);
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        {/* <RegisterAccountScreen /> */}
        {/* <LogInScreen /> */}
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}