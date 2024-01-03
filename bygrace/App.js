import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { styles } from './src/style';
import { Text, View } from 'react-native';

//SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.openscreen}>WELCOME TO</Text>
      <Text style={styles.subtitleopenscreen}>BY GRACE BIBLE</Text>
      <StatusBar style="auto" />
    </View>
  )
  };

