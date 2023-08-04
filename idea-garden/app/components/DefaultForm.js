import React from "react";
import { TextInput } from "react-native-paper";

function DefaultForm(placeHolderText, marginTopValue, backgroundColour, callbackFunction, stateChangeFunction) {
    return (<TextInput
        mode="flat"
        placeholder={placeHolderText}
        placeholderTextColor="rgba(28, 29, 33, 0.3)"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        cursorColor="#1C1D21"
        theme={{roundness: 10}}
        style={{
          marginTop: {marginTopValue},
          alignSelf: 'center',
          width: 300,
          borderRadius: 10,
          backgroundColor: backgroundColour
        }}
        onChangeText = {(newText) => {callbackFunction(stateChangeFunction, newText)}}
      />);
}

export default DefaultForm;