import React from "react";
import { TextInput } from "react-native-paper";


/**
 * This component is used for rendering a text input.
 * It is already styled to be in the idea-garden theme.
 * @param {String} placeHolderText The text that appears as placeholder before entering anythin.
 * @param {int} marginTopValue How much margin to add from the top.
 * @param {Colour} backgroundColour Background colour of the text input.
 * @param {callbackFunction} callbackFunction The callback function used for changing the state variable of the input.
 * @param {function} stateChangeFunction The function used for changing the state of the variable.
 * @param {variable} state The state variable for the input.
 * @returns 
 */
function DefaultForm(placeHolderText, marginTopValue, backgroundColour, callbackFunction, stateChangeFunction, state) {
    return (<TextInput
        mode="flat"
        placeholder={placeHolderText}
        placeholderTextColor="rgba(28, 29, 33, 0.3)"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        cursorColor="#1C1D21"
        value={state}
        theme={{roundness: 10}}
        style={{
          marginTop: marginTopValue,
          alignSelf: 'center',
          width: '80%',
          borderRadius: 10,
          backgroundColor: backgroundColour
        }}
        onChangeText = {(newText) => {callbackFunction(stateChangeFunction, newText)}}
      />);
}

export default DefaultForm;