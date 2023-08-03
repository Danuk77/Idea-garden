
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider } from "react-redux";
import { name as appName } from './app.json';

import Tabs from "./Navigation/tabs";
import LogInScreen from "./app/screens/LogInScreen";
import store from "./redux/store";


// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <LogInScreen />
      </PaperProvider>
    </Provider>
    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);