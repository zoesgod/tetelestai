import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Home</Text>
        <Text>Back</Text>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
   // alignItems: 'center',
   // justifyContent: 'center'
  },

  header: {
    height: 60,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }

});
