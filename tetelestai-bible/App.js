import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.openscreen}>TETELESTAI BIBLE</Text>
      <Text style={styles.subtitleopenscreen}>Igreja da Família</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  openscreen: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: 'center',
  },

  subtitleopenscreen: {
    fontSize: 18,
    color: "white",
    textAlign: 'center',
  }

}
);
