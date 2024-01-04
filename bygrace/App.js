import { StatusBar } from 'expo-status-bar';
import { styles } from './src/style';
import { Text, View } from 'react-native';

//SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.openscreen}>WELCOME TO</Text>
      <Text style={styles.subtitleopenscreen}>BY GRACE</Text>
      <Text style={styles.subtitleopenscreen}></Text>
      <Text style={styles.bible}>"And You Will Know The Truth, </Text>
      <Text style={styles.bible}>and The Truth set you free." </Text>
      <Text style={styles.bible}>John 8:32</Text>
      
      <StatusBar style="auto" />
    </View>
  )
  };

