import React from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, StyleSheet } from "react-native";

function IdeaScreen({ navigation }) {

  // Ensures that the navigation heading on top is hidden
  useFocusEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

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