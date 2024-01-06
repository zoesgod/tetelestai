import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity }  from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../../assets/iconBG.png')}
                style={{width: '100%'}}
                resizeMode="contain"
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.verse}>"Then you will know the truth, and the truth will set you free." - John 8:32</Text>
        <Text style={styles.text}>Login to begin</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000"
  },
  
  containerLogo:{
    flex: 2,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  
  containerForm:{
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%"
  },
  
  verse:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    textAlign: "justify"
  },

  text:{
    color: "#a1a1a1"
  },

  button:{
    position: "absolute",
    backgroundColor: "#d7a905",
    borderRadius: 60,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center"
  },
  
  buttonText:{
    fontSize: 15,
    color: "#000",
    fontWeight: 'bold'
  }
})