
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider } from "react-redux";
import { useFonts } from 'expo-font';

// Firebase imports
import functions from "./firebase/initialisaiton";

// Screens
import Tabs from "./Navigation/tabs";
import LogInScreen from "./app/screens/LogInScreen";
import RegisterAccountScreen from "./app/screens/RegisterAccountScreen";
import ForgotPasswordScreen from "./app/screens/ForgotPasswordScreen";

// Redux store
import store from "./redux/store";

const Stack = createNativeStackNavigator();

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
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LogIn"
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="LogIn" component={LogInScreen} />
            <Stack.Screen name="Register" component={RegisterAccountScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="Main" component={Tabs}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  ); 
}