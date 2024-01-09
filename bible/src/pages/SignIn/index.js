import { useState} from 'react'
import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity}  from "react-native";
import * as Animatable from 'react-native-animatable'
import '../../utils/i18n'
import { useTranslation } from 'react-i18next';

export default function SignIn() {
 const [currentLanguage, setCurrentLanguage] = useState("pt")

 const {t, i18n} = useTranslation();
 
 const changeLanguage = (value) => {
  i18n.changeLanguage(value)
  .then (() => {
    setCurrentLanguage(value)
  })
  .catch((err) => {
    console.log(err);
  })
 }
    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>{t('Welcome to BY GRACE')}</Text>
          <Text style={styles.message}>{t('The Word of God in your Heart!')}</Text>
        </Animatable.View>

        <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/iconBG.png')}
          style={{width: '100%'}}
          resizeMode="contain"
        />
        </View>
        
        <View style={styles.languages}>
          
          <TouchableOpacity
          onPress={() => changeLanguage('pt')}
          style={[
            styles.langButton,{
            borderColor: currentLanguage === 'pt' ? "#FFF": 'transparent',  
            }]
          }
          >
            <Text style={styles.textButton}>{t('Portuguese')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => changeLanguage('en')}
          style={[
            styles.langButton,{
            borderColor: currentLanguage === 'en' ? "#FFF": 'transparent',  
            }]
          }
          >
            <Text style={styles.textButton}>{t('English')}</Text>
          </TouchableOpacity>
        </View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>{t('Email')}</Text>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
        />
        
        <Text style={styles.title}>{t('Password')}</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>{t('Connect')}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.register}>
          <Text style={styles.textRegister}>{t('Not a member? Sign Up')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.textForgot}>{t('Forgot Password? Click Here.')}</Text>
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

  langButton:{
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
    marginRight: 4,
    marginLeft: 4,
  },
  
  languages:{
    flexDirection: 'row',
    position: 'absolute',
    borderRadius: 12,
    paddingVertical: 25,
    width: "100%",
    marginTop: 14,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  containerHeader:{
    marginTop: "20%",
    alignItems: "center",
  },

  message:{
    marginTop: "3%",
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },

  containerLogo:{
    alignItems: "center",
  },
  
  textButton:{
    marginRight: 4,
    marginLeft: 4,
    color: '#FFF',
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
    fontSize: 14 
  },

  button:{
    backgroundColor: "#1B243D",
    borderRadius: 12,
    paddingVertical: 12,
    width: "100%",
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
    color: "#010101",
  },

  textForgot:{
    marginTop: 5,
    alignSelf: "center",
    color: "#010101",
    }

});
