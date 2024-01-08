import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity}  from "react-native";
import * as Animatable from 'react-native-animatable'

export default function SignIn() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Welcome to BY GRACE</Text>
          <Text style={styles.message}>The Word of God in your Heart</Text>
        </Animatable.View>

        <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/iconBG.png')}
          style={{width: '100%'}}
          resizeMode="contain"
        />
        </View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>E-mail</Text>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
        />
        
        <Text style={styles.title}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Connect</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.register}>
          <Text style={styles.textRegister}>Don´t have an Account? Sign Up</Text>
        </TouchableOpacity>

        </Animatable.View>
      </View>
    );
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor: "#1B243D",
  },

  containerHeader:{
    marginTop: "24%",
    alignItems: "center",
  },

  message:{
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },

  containerForm:{
    flex:1,
    marginTop: "1%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  title:{
    fontSize: 15,
    marginTop: 28,
  },

  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16 
  },

  button:{
    backgroundColor: "#1B243D",
    borderRadius: 12,
    paddingVertical: 12,
    width: "60%",
    marginTop: 14,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  
    textButton:{
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold"
  },
  
  register:{
  marginTop: 14,
  alignSelf: "center",
  color: "#010101"
  },

  textRegister:{

  }
  
});
