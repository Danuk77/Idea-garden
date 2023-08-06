import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

/**
 * The back button used for idea garden
 * @param {callbackFunction} callbackFunction Funtion used for handling the back button press
 * @returns 
 */
function BackButton(callbackFunction) {
    return (
        <View style={{alignSelf: 'left', width: 30, height: 30, marginTop: 25, marginLeft: 20}}>
            <TouchableOpacity onPress={callbackFunction}>
                <Image 
                    source={require('../../assets/ForgotPasswordScreenAssets/back.png')}
                    resizeMode="contain"
                    style={{
                    width:'100%',
                    height: '100%',
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

export default BackButton;