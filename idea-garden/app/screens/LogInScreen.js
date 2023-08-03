import React, { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from 'react-native-paper';
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";

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
    console.log("Forgot the password")
  }

  // TODO
  // Callback function when the user has finished entering the details and clicked on the log in
  const handleLogIn = () => {
    console.log("The user has logged in")
  }

  // TODO
  // Callback function when the Facebook log in is clicked
  const handleFacebookLogIn = () => {
    console.log("Logging in with Facebook")
  }

  // TODO
  // Callback function when the Google log in is clicked
  const handleGoogleLogIn = () => {
    console.log("Logging in with Google")
  }

  return (
    <View style={styles.container}>

      {/* Idea garden logo */}
      <Image source={require('../../assets/LogInScreenAssets/tempLogo.png')}/>

      {/* Email text */}
      <Text style={styles.textColor}>Email</Text>

      {/* Email input prompt */}
      <TextInput
      mode="flat"
      onChangeText = {(newText) => {handleTextChange(setEmail, newText)}}
      />

      {/* Password text */}
      <Text style={styles.textColor}>Password</Text>


      {/* Password input prompt */}
      <TextInput
      mode="flat"
      secureTextEntry = {hiddenPassword}
      onChangeText = {(newText) => {handleTextChange(setPassword, newText)}}
      right={<TextInput.Icon icon= {hiddenPassword ? "eye" : 'eye-off'} onPress={() => {setVisible(!hiddenPassword)}}/>}
      />

      {/* Forgot password */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={{color:'#916D97', fontSize: 20}}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Log in button */}
      <TouchableOpacity onPress={handleLogIn}>
        <Image 
          source={require('../../assets/LogInScreenAssets/SubmitSignIn.png')}
        />
      </TouchableOpacity>

      {/* Alternate log in text */}
      <Text style={styles.textColor}>Or continue with</Text>

      {/* Alternate log in Facebook button */}
      <TouchableOpacity onPress={handleFacebookLogIn}>
        <Image 
          source={require('../../assets/LogInScreenAssets/facebook.png')}
        />
      </TouchableOpacity>

      {/* Alternate log in Google button */}
      <TouchableOpacity onPress={handleGoogleLogIn}>
        <Image 
          source={require('../../assets/LogInScreenAssets/google.png')}
        />
      </TouchableOpacity>

      {/* Sign up text */}
      <Text style={styles.textColor}>Dont have an account?</Text>
      <Text style={{color:'#916D97', fontSize: 20}}>Sign up</Text>

    </View>
  )
}

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCBCBC',
  },
  
  textColor: {
    fontSize: 20,
    color: '#1C1D21'
  }
})