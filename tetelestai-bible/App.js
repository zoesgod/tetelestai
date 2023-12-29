import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function prepare() {
      try {
        // keeps the splash screen visible while assets are cached
        await SplashScreen.preventAutoHideAsync();

        // pre-load/cache assets: images, fonts, and videos
        await func.loadAssetsAsync();
      } catch (e) {
        // console.warn(e);
      } finally {
        // loading is complete
        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  React.useEffect(() => {
    // when loading is complete
    if (isLoading === false) {
      // hide splash function
      const hideSplash = async () => SplashScreen.hideAsync();

      // hide splash screen to show app
      hideSplash();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

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
