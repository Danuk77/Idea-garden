import React from "react";
import { TextInput } from "react-native-paper";

/**
 * This component is used for rendering a hidden text input (eg: Password).
 * It is already styled to be in the idea-garden theme.
 * @param {int} marginTopValue How much margin to add from the top
 * @param {Colour} backgroundColour Background colour of the text input
 * @param {callbackFunction} callbackFunction The callback function used for changing the state variable of the input.
 * @param {function} stateChangeFunction The function used for changing the state of the variable.
 * @param {variable} state The state variable for the input.
 * @param {function} visibilityChangeFunction The callback function used to change the state variable for the visibility of the text input.
 * @param {Boolean} visible State variable storing whether the text should be seen or hidden
 * @returns 
 */
function HiddenForm(marginTopValue, backgroundColour, callbackFunction, stateChangeFunction, state, visibilityChangeFunction, visible) {
    return (<TextInput
        mode="flat"
        placeholder="******************"
        placeholderTextColor="rgba(28, 29, 33, 0.3)"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        cursorColor="#1C1D21"
        secureTextEntry = {visible}
        value={state}
        theme={{roundness: 10}}
        style={{
          marginTop: marginTopValue,
          width: '80%',
          backgroundColor: backgroundColour,
          alignSelf: 'center',
          borderRadius: 10
        }}
        onChangeText = {(newText) => {callbackFunction(stateChangeFunction, newText)}}
        right={<TextInput.Icon icon= {visible ? "eye" : 'eye-off'} onPress={() => {visibilityChangeFunction(!visible)}}/>}
      />);
}

export default HiddenForm;