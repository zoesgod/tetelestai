import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { Styles } from './src/style';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.openscreen}>BY GRACE</Text>
      <Text style={styles.subtitleopenscreen}>BIBLE</Text>
      <StatusBar style="auto" />
    </View>
  )
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