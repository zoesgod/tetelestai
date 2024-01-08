import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity }  from "react-native";
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/iconBG.png')}
          style={{width: '100%'}}
          resizeMode="contain"
        />
      </View>
      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.verse}>"Then you will know the truth, and the truth will set you free." - John 8:32</Text>
        <Text style={styles.text}>Login to begin</Text>

        <TouchableOpacity
        style={styles.button}
        onPress={ () => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Animatable.View> 
    </View>
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#1B243D"
  },
  
  containerLogo:{
    flex: 2,
    backgroundColor: "#1B243D",
    justifyContent: "center",
    alignItems: "center",
  },
  
  containerForm:{
    flex: 2,
    backgroundColor: "#1B243D",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  
  verse:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    textAlign: "justify",
    color: "#FFF"
  },

  text:{
    color: "#a1a1a1",
    paddingVertical: 65,
    textAlign: "center"
  },

  button:{
    position: "absolute",
    backgroundColor: "#d7a905",
    borderRadius: 12,
    paddingVertical: 12,
    width: "60%",
    alignSelf: "center",
    bottom: "25%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  
  buttonText:{
    fontSize: 15,
    color: "#1B243D",
    fontWeight: 'bold'
  }
})