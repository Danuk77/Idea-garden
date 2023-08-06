
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider } from "react-redux";
import { useFonts } from 'expo-font';

// Firebase imports
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

// Screens
import Tabs from "./Navigation/tabs";
import LogInScreen from "./app/screens/LogInScreen";
import RegisterAccountScreen from "./app/screens/RegisterAccountScreen";

// Redux store
import store from "./redux/store";
import ForgotPasswordScreen from "./app/screens/ForgotPasswordScreen";


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
        {/* <ForgotPasswordScreen/> */}
        <RegisterAccountScreen />
        {/* <LogInScreen /> */}
        {/* <NavigationContainer>
          <Tabs />
        </NavigationContainer> */}
      </PaperProvider>
    </Provider>
  ); 
}