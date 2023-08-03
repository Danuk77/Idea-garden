import React from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Text, StyleSheet, View } from "react-native";

function SocialScreen({ navigation }) {
  // Ensures that the navigation heading on top is hidden
  useFocusEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  
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
