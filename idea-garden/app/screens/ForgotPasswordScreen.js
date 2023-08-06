import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import { useState } from "react";

import DefaultForm from "../components/DefaultForm";
import HiddenForm from "../components/HiddenForm";
import BackButton from "../components/BackButton";

function ForgotPasswordScreen() {

    // State to store the email of the user
    const [email, setEmail] = useState(""); 
    
    /**
     * Generic callback function to handle text UI changes
     * @param {CallableFunction} stateChange Callback function for the state to change
     * @param {string} newText Value of the new state
     */
    const handleUIChange = (stateChange, newText) => {
        stateChange(newText);
    }

    // TODO
    // Callback function used for handling the back button press
    const handleBackButtonPress = () => {
        alert("Pressed back button");
    }

    // TODO
    // Callback function used for handling proceeding to the next page after entering the email
    const handleContinuePress = () => {
        alert("Successfully entered the email");
    }


    return (
        <SafeAreaView style={styles.container}>

            {/* Back button */}
            {BackButton(handleBackButtonPress)}

            {/* Forgot password heading */}
            <Text style={{
                    fontSize: 48,
                    color: "#1C1D21",
                    textAlign: 'center',
                    marginTop: 15,
                    fontFamily: 'ideaGardenFont'
            }}>
                Forgot password
            </Text>

            {/* Prompt the user to enter the email */}

            <Text style={{
                    fontSize: 20,
                    color: "#1C1D21",
                    marginTop: 25,
                    paddingLeft: 40,
                    fontFamily: 'ideaGardenFont'
            }}>
                Enter your email
            </Text>

            {DefaultForm("JohnSmith@server.com", 15, '#F1E3E4', handleUIChange, setEmail, email)}

            <View style={{alignSelf: 'center', width: 160, height: 60, marginTop: 70}}>
                <TouchableOpacity onPress={handleContinuePress}>
                    <Image 
                        source={require('../../assets/ForgotPasswordScreenAssets/Continue.png')}
                        resizeMode="contain"
                        style={{
                        width:'100%',
                        height: '100%',
                        }}
                    />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCBCBC',
    color: '#1C1D21',
    fontFamily: 'ideaGardenFont',
  },
})