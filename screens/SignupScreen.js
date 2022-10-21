import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { auth } from '../firebase.js'
import {Image} from 'react-native'

const SignupScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkpassword, setCheckpassword] = useState('')
  const [mobile, setMobile] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])
  const gotologin =() =>{
    navigation.replace("Login")
  }
  const handleSignUp = () => {
    if(checkpassword==password){
      auth
      .createUserWithEmailAndPassword(email,password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
    }
    else{
      alert('Passwords do not match.')
    }
    
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
  
  return (
    // <ScrollView>

    
    <View
      style={styles.container}
      behavior="absolute"
    >
      <Image 
        source={require('./img/icon.png')}
        style={styles.icon}
        />
      
      <View style={styles.inputContainer}>
      
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          value={mobile}
          onChangeText={text => setMobile(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          />
        <TextInput
          placeholder="Confirm Password"
          value={checkpassword}
          onChangeText={text => setCheckpassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={gotologin}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  icon:{
    // justifyContent: 'center',
    // alignItems: '',
    width: 200, 
    height:60,
    position: 'absolute',
    top:100
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  inputContainer: {
    width: '70%',
    borderBottomColor:'white'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderWidth:4,
    // borderBottomColor:'white'
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#2281bf',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    // borderColor: '#33cccc',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#2281bf',
    fontWeight: '700',
    fontSize: 16,
  },
})