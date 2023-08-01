import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IdeaScreen from '../app/screens/IdeaScreen';
import CreativeScreen from '../app/screens/CreativeScreen';
import SocialScreen from '../app/screens/SocialScreen';
import SettingsScreen from '../app/screens/SettingsScreen';
import { StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faLightbulb, faSquarePlus, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#1C1D21'
                }
            }}>
            <Tab.Screen name="Idea"
                component={IdeaScreen}
                options={{ tabBarIcon: ({ focused }) => focused ? <FontAwesomeIcon icon={faLightbulb} color={'#818181'} size={29} /> : <FontAwesomeIcon icon={faLightbulb} color={'#F1E3E4'} size={29} /> }} />
            <Tab.Screen name="CreativeScreen"
                component={CreativeScreen}
                options={{ tabBarIcon: ({ focused }) => focused ? <FontAwesomeIcon icon={faSquarePlus} color={'#818181'} size={29} /> : <FontAwesomeIcon icon={faSquarePlus} color={'#F1E3E4'} size={29} /> }} />
            <Tab.Screen name="SocialScreen"
                component={SocialScreen}
                options={{ tabBarIcon: ({ focused }) => focused ? <FontAwesomeIcon icon={faUserGroup} color={'#818181'} size={29} /> : <FontAwesomeIcon icon={faUserGroup} color={'#F1E3E4'} size={29} /> }} />
            <Tab.Screen name="SettingsScreen"
                component={SettingsScreen}
                options={{ tabBarIcon: ({ focused }) => focused ? <FontAwesomeIcon icon={faGear} color={'#818181'} size={29} /> : <FontAwesomeIcon icon={faGear} color={'#F1E3E4'} size={29} /> }} />
        </Tab.Navigator >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
})