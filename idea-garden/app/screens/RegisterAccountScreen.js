import React, { useCallback, useEffect, useMemo } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";
import {SafeAreaView} from 'react-native-safe-area-context';
import { useState } from "react";

// Redux imports
import { useDispatch } from "react-redux";

// Libraries used for checking fields entered by the user
import validator from "validator";
import schema from "../other/passwordValidation";

// Firebase imports
import { httpsCallable } from "firebase/functions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { functions, auth } from "../../firebase/initialisaiton";

// Reusable components imports
import DefaultForm from "../components/DefaultForm";
import HiddenForm from "../components/HiddenForm";
import { logIN } from "../../redux/actions";

function RegisterAccountScreen({navigation}) {
    
    // State variables used for the Register screen
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisibility, setVisibility] = useState(true);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);

    // Reference to redux dispatch
    const dispatch = useDispatch();
    

    /**
     * Generic callback function to handle text UI changes
     * @param {CallableFunction} stateChange Callback function for the state to change
     * @param {string} newText Value of the new state
     */
    const handleUIChange = (stateChange, newText) => {
        stateChange(newText);
    }

    // Function called to return back to the log in screen
    const handleReturnToLogIn = () => {
        navigation.navigate("LogIn");
    }

    /**
     * Validates the user credentials and returns an object ({Status: True} or {Status: False})
     * @param {JSON object} userCredentials Contains the information the user has entered on the register account page
     */
    const handleValidationCheck = async (userCredentials) => {

        // Check if all fields have been entered
        const missingList = []
        for(key in userCredentials){
            if(userCredentials[key] === ""){
                missingList.push(key);
            }
        }

        // Return an object with all the fields that are still empty
        if(missingList.length != 0){
            return {
                status:false,
                field: "Missing",
                list: missingList,
            }
        }

        // Username pattern regular expression (A potential improvement is to check for curse language in the usernames)
        const usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;

        // Validate the email criteria
        if(!validator.isEmail(userCredentials.email)){
            return {
                status: false,
                field: "email",
                error: "The email format is incorrect"
            }
        }

        // Validate the confirmation email
        // Check if they are the same
        if(userCredentials.email.toLowerCase() !== userCredentials.confirmEmail.toLowerCase()){
            return {
                status: false,
                field: "confirm email",
                error: "The confirm email does not match with the other email."
            }
        }

        // Validate the password
        // Check for the strength of the password
        const strength = schema.validate(userCredentials.password);
        if(!strength){
            return {
                status: false,
                field: "password",
                // Return information about why the password validation failed
                error: schema.validate(userCredentials.password, {details:true})[0].message
            }
        }

        // Check if the passwords match
        if(userCredentials.password != userCredentials.confirmPassword){
            return {
                stats: false,
                field: "Confirm password",
                error: "The password does not match with the previously entered password."
            }
        }
        

        // Validate the username
        // Check the length
        if(userCredentials.name.length < 3){
            return{
                status:false,
                field: "Username",
                error: "The username must be atleast 3 characters."
            }
        }else if(userCredentials.name.length > 16){
            return{
                status:false,
                field: "Username",
                error: "The username must be less than 16 characters long."
            }
        }

        // Check if the username is of the correct format through comparing with the regular expression stored inside usernamePattern
        if(!usernamePattern.test(userCredentials.name)){
            return{
                status:false,
                field: "Username",
                error: "The username entered is invalid please enter a different username."
            }
        }

        // Check with the backend whether the username already exist (cloud function)
        const userNameValidity = httpsCallable(functions, 'checkUsernameValid');

        try{
            const validity = await userNameValidity({name: userCredentials.name});
            if(!validity.data.status){
                return {
                    status: false,
                    field: "username",
                    error:validity.data.error
                }
            }

             // All validations passed, ready to create a new account
            return {
                status: true
            }
        }catch(err){
            alert("There was an error. Please contact support");
        }
    }

    // Function called when the user has clicked the register button
    const handleRegister = useCallback(async () => {
        try {
            const isValid = await handleValidationCheck({
                name: username,
                email: email,
                confirmEmail: emailConfirmation,
                password: password,
                confirmPassword: confirmPassword
            });
        
            if (!isValid.status) {
                // Handle validation error
                alert(isValid.error);
                return;
            }
        
            const updateFireStoreUsername = httpsCallable(functions, 'updateFireStoreUsername');
        
            // Register the users' account with the system
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
        
            // Update the username in Firestore
            const updateResponse = await updateFireStoreUsername({ name: username, uid: user.uid });

            // Get the username and the access token
            // const getUsernameInfo = httpsCallable(functions, 'getUsername');
            // const username = await getUsernameInfo({uid: response.user.uid});
            const accessToken = response.user.stsTokenManager.accessToken;

            if (updateResponse.data.status) {
                // Update the redux store with the logged in users credentials
                dispatch(logIN({userToken: accessToken,
                                username: username
                                }));

                // Upon successful registration take the user to the main screen
                navigation.navigate("Main");
            } else {
                alert(updateResponse.data.error);
            }
          } catch (error) {
                console.error(error);
          }

    },[username, email, emailConfirmation, password, confirmPassword])


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