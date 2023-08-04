import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';

function RegisterAccountScreen() {

  return (
    <SafeAreaView style={styles.container}>
        <Text
        style=
        {{
            fontSize: 48
        }}
        >
            Register account
        </Text>
    </SafeAreaView>
  )
}

export default RegisterAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E3E4'
  },
})