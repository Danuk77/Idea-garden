import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import { useState } from "react";

import DefaultForm from "../components/DefaultForm";
import HiddenForm from "../components/HiddenForm";

function RegisterAccountScreen() {
    
    // State variables used for the Register screen
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisibility, setVisibility] = useState(true);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);

    /**
     * Generic callback function to handle text UI changes
     * @param {CallableFunction} stateChange Callback function for the state to change
     * @param {string} newText Value of the new state
     */
    const handleUIChange = (stateChange, newText) => {
        stateChange(newText);
    }

    // TODO
    // Function called to return back to the log in screen
    const handleReturnToLogIn = () => {
        alert("Returning back to the log in screen");
    }

    // TODO
    // Function called when the user has clicked the register button
    const handleRegister = () => {
        alert("Register an account with the system");
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* The content must be scrollable */}
            <ScrollView style = {{flex:1}}>
                {/* Register account heading */}
                <Text style={{
                    fontSize: 48,
                    color: "#1C1D21",
                    textAlign: 'center',
                    marginTop: 30,
                    fontFamily: 'ideaGardenFont'
                }}>
                    Register account
                </Text>

                {/* Username entering prompt */}
                <Text style={{
                    fontSize: 20,
                    marginTop: 25,
                    left: 50
                }}>
                    Username
                </Text>
                {DefaultForm("John Smith", 20, '#F1E3E4', handleUIChange, setUsername, username)}

                {/* Email entering prompt */}
                <Text style={{
                    fontSize: 20,
                    marginTop: 20,
                    left: 50
                }}>
                    Email
                </Text>
                {DefaultForm("JohnSmith@email.com", 20, '#F1E3E4', handleUIChange, setEmail, email)}

                {/* Email confirmationentering prompt */}
                <Text style={{
                    fontSize: 20,
                    marginTop: 20,
                    left: 50
                }}>
                    Confirm email
                </Text>
                {DefaultForm("JohnSmith@email.com", 20, '#F1E3E4', handleUIChange, setConfirmEmail, emailConfirmation)}

                {/* Password entering prompt */}
                <Text style={{
                    fontSize: 20,
                    marginTop: 20,
                    left: 50
                }}>
                    Password
                </Text>
                {HiddenForm(20, '#F1E3E4', handleUIChange, setPassword, password, setVisibility, passwordVisibility)}

                {/* Password confirmationentering prompt */}
                <Text style={{
                    fontSize: 20,
                    marginTop: 20,
                    left: 50
                }}>
                    Confirm password
                </Text>
                {HiddenForm(20, '#F1E3E4', handleUIChange, setConfirmPassword, confirmPassword, setConfirmPasswordVisibility, confirmPasswordVisibility)}
                
                {/* Register button */}
                <View style={{alignSelf: 'center', width: '50%', height: 50, marginTop: 30}}>
                    <TouchableOpacity onPress={handleRegister}>
                        <Image 
                            source={require('../../assets/RegisterScreenAssets/register.png')}
                            resizeMode="contain"
                            style={{
                            width:'100%',
                            height: '100%',
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Already have an account prompt */}
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                    <Text style={[styles.textColor, {fontSize:20, paddingBottom: 20}]}>Already have an account? </Text>
                    <TouchableOpacity onPress={handleReturnToLogIn}>
                        <Text style={{color:'#916D97', fontSize: 20}}>Sign in</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCBCBC',
    color: '#1C1D21',
    fontFamily: 'ideaGardenFont',
  },
})