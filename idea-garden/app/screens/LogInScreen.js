import React, { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

import DefaultForm from "../components/DefaultForm";
import HiddenForm from "../components/HiddenForm";

function LogInScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hiddenPassword, setVisible] = React.useState(true);

  // General callback function used for updating the email and password fields
  const handleTextChange = (stateChange, newText) => {
    stateChange(newText);
  };

  // TODO
  // Callback function when the user has clicked forgot password
  const handleForgotPassword = () => {
    alert("Forgot the password");
  }

  // TODO
  // Callback function when the user has finished entering the details and clicked on the log in
  const handleLogIn = () => {
    alert("The user has logged in");
  }

  // TODO
  // Callback function when the Facebook log in is clicked
  const handleFacebookLogIn = () => {
    alert("Logging in with Facebook");
  }

  // TODO
  // Callback function when the Google log in is clicked
  const handleGoogleLogIn = () => {
    alert("Logging in with Google");
  }

  //TODO
  // Callback function when the user has clicked sign up
  const handleSignUp = () => {
    alert("The user wants to make an account");
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* Idea garden logo */}
      <Image 
        style={{
          width:200,
          height:100,
          alignSelf: 'center',
          marginTop: 60,
          right: 25
        }}
        source={require('../../assets/LogInScreenAssets/tempLogo.png')}
      />

      {/* Email text */}
      <Text style={
        [styles.textColor,
           {
            left: 50,
            marginTop: 20
            }]
        }>
          Email
      </Text>

      {/* Email input prompt */}
      {DefaultForm("example@server.com", 10, '#F1E3E4', handleTextChange, setEmail, email)}

      {/* Password text */}
      <Text style={
        [styles.textColor,
          {
            left: 50,
            marginTop: 10
          }]}>
            Password
      </Text>

      {/* Password input prompt */}
      {HiddenForm(10, '#F1E3E4', handleTextChange, setPassword, password, setVisible, hiddenPassword)}

      {/* Forgot password */}
      <View style={{alignSelf: 'flex-end', right: 45}}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={{
            marginTop : 15,
            color:'#916D97', 
            fontSize: 20,
            }}>
              Forgot password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Log in button */}
      <View style={{alignSelf: 'center', width: 150, height: 50, marginTop: 30}}>
        <TouchableOpacity onPress={handleLogIn}>
          <Image 
            source={require('../../assets/LogInScreenAssets/SubmitSignIn.png')}
            resizeMode="contain"
            style={{
              width:'100%',
              height: '100%',
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Alternate log in text */}
      <Text style={[
        styles.textColor,
        {textAlign: 'center',
        marginTop: 15}
        ]}>
        Or continue with
      </Text>

      {/* Alternate log in options */}
      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        {/* Alternate log in Facebook button */}
        <TouchableOpacity onPress={handleFacebookLogIn} style={{marginHorizontal: 15}}>
          <Image 
            resizeMode="contain"
            style={{width:60,height:60}}
            source={require('../../assets/LogInScreenAssets/facebook.png')}
          />
        </TouchableOpacity>

        {/* Alternate log in Google button */}
        <TouchableOpacity onPress={handleGoogleLogIn} style={{marginHorizontal: 15}}>
          <Image
            resizeMode="contain"
            style={{width:60,height:60}}
            source={require('../../assets/LogInScreenAssets/google.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Sign up text */}
      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
        <Text style={styles.textColor}>Dont have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={{color:'#916D97', fontSize: 20}}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCBCBC',
    fontFamily: 'ideaGardenFont'
  },
  
  textColor: {
    fontSize: 20,
    color: '#1C1D21'
  }
})