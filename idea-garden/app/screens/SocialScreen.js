import React from "react";
import { Text, StyleSheet, View } from "react-native";

function SocialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the social screen.</Text>
    </View>
  )
}

export default SocialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1E3E4'
  },
})
