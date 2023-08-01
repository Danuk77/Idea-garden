import React from "react";
import { Text, StyleSheet, View } from "react-native";

function CreativeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the creative area Fransisco.</Text>
    </View>
  )
}

export default CreativeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1E3E4'
  },
})