import React from "react";
import { Text, StyleSheet, View } from "react-native";

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the settings screen.</Text>
    </View>
  )
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1E3E4'
  },
})