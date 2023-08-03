import React from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, StyleSheet } from "react-native";

function LogInScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Log in screen. (It is still under construction)</Text>
    </View>
  )
}

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCBCBC'
  },
})