import React, { useEffect, Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert
} from 'react-native';

import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';


export default function Login({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const logins = () => {
      auth().signInWithEmailAndPassword(email, password) 
          .then(() => {
            Alert.alert(
              'Successful login',
               email,
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => navigation.navigate('MainContainer')},
              ],
              {cancelable: false}
            )
          })
          .catch(function(error)  {
            Alert.alert(
              'Login failed',
              'Email and password are incorrect',
              [
                {text: 'OK', onPress: () => console.log('Ok Pressed')},
              ],
              {cancelable: false}
            )
          });
      }
    

  return (
  
      <SafeAreaView
        colors={['#222', '#222', '#111']}
        style={styles.container}
      >
       
       <Image style={styles.image} source={require('./Image/logo.png')} />
        <Text style={styles.loginText}>Welcome Back, Movie Lover!</Text>
        <TextInput style={styles.textoutline}
label='Email Address'
mode='outlined'
activeOutlineColor = "#FFFFFF"
theme={{ colors: { text: '#ffffff',placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
outlineColor='#99FFFFFF'
direction ='rtl'
value={email}
onChangeText={(userEmail) => setEmail(userEmail)}
underlineColor='transparent'/>
       

        <TextInput
        label={'Password'}
          activeOutlineColor = "#FFFFFF"
          style={styles.input}
          theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF',label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
          outlineColor='#99FFFFFF'
          mode='outlined'
          value={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          secureTextEntry={true}
          
          textContentType='password'
        />


        <TouchableOpacity>
          <Text style={styles.fpText}>Forgot Password?</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.loginButton} onPress={() => logins()} >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Create new account?</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('Logup')}}>
            <Text style={[styles.signUpText, { color: '#B53471' }]}>
              {' Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginWithBar}>
          <TouchableOpacity style={styles.iconButton}>
          <Image style={styles.anh} source={require('./Image/icon.png')} />
            {/* <Icon name='facebook-square' type='font-awesome' size={30} color='#808e9b' /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
          <Image style={styles.anh} source={require('./Image/facebook-color-icon.png')} />
            {/* <Icon
              name='facebook-square'
              type='font-awesome'
              size={30}
              color='#808e9b'
            /> */}
          </TouchableOpacity>
         
        </View>
   
      </SafeAreaView>

  );

}



const styles = StyleSheet.create({
  anh: {
      width: 30,
      height: 30,
  },
  textoutline: {
     backgroundColor: '#051138',
    borderRadius: 50,
   


  },
  label: {
    // fontFamily: FONT_FAMILY.primary,
    marginLeft: 5,
   
    // color: COLORS.WHITE,
    fontSize: 12,
    //  marginTop: -30,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#051138',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#ffffff',
    alignSelf: 'center',
  },

  loginText: {
    color: '#ffffff',
    fontSize: 28,
    width: 199,
    height: 72,
    left: 14,

    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -25,
    marginBottom: 10,
  },
 
  input: {
    width: '100%',
    



    
    
    backgroundColor: '#051138',
    borderRadius: 10,

  
    fontSize: 16,
    color: '#ffffff',
  },
  fpText: {
    alignSelf: 'flex-end',
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#3D54F8',
    paddingVertical: 15,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    left: 29,
    borderRadius: 20,
    width: 255,
    height: 60,

  },

  loginButtonText: {
    fontSize: 20,
    fontWeight: '500',
    
    color: '#fafafa',
    alignSelf: 'center',
  },
  loginWithBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  iconButton: {
    backgroundColor: '#333',
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signUpTextView: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#808e9b',
    fontSize: 14,
    fontWeight: '500',
  },
  image: {

    width: 150,
    height: 150,
    left: -15,
    top: -6,
    borderRadius: 32,
  },
  title: {
    position: 'absolute',
    width: 199,
    height: 72,
    left: 24,
    top: 206,
    fontSize: 24,

    /* or 36px */
    
    
    color: '#FFFFFF',
    
    
  },
});
  
 