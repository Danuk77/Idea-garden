import React from "react";
import { Text, View, StyleSheet } from "react-native";

function IdeaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the idea screen.</Text>
    </View>
  )
}

export default IdeaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1E3E4'
  },
})