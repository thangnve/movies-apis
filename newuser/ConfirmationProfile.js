import React, { useEffect, useState } from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity,ScrollView, SafeAreaView} from 'react-native';


export default function ConfirmationProfile() {
  return (
      <SafeAreaView colors={['#222', '#222', '#111']} style={styles.container}>
 <Text style={styles.loginText} >Confirm New Account</Text>
 <Image style={styles.Image}  source={require('./Image/user.png')} />
 <View style={styles.phan}>
    <Text style={styles.text}>Welcome</Text>
    <Text style={styles.title}>Arya Wijaya</Text>
 </View>
 
       <View style={styles.vo3}>
        <TouchableOpacity style={styles.loginButton} >
       <Text style={styles.text}>Create My Counts</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

vo3: {
  height: 152,
  display: 'flex',
  flexDirection : 'row',
  justifyContent: 'space-around',
  alignContent: 'space-around',
},
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    
    backgroundColor: '#051138',

  },
  phan: {
   
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    alignSelf: 'center',
  },
  loginText: {
    color: '#ffffff',
    fontSize: 28,
    width: 150,
    height: 72,
    textAlign: 'center',
    display: 'flex',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
 
  },
  text:{
    textAlign: 'center',
   color : '#FFFFFF'
  },
  loginTexts: {
    color: '#ffffff',
    fontSize: 28,
    width: 203,
    height: 72,  
    fontSize: 24,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  loginButton: {
    backgroundColor: '#3D54F8',
    paddingVertical: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   display: 'flex',
    borderRadius: 80,
    width: 254,
    height: 54,
  },

  loginButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
  },
  Button: {
    backgroundColor: '#151D3B',
    borderRadius: 14,
    shadowRadius: 22,
    width: 152,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  Image: {
    width: 150,
     height: 150,
  },
});
  
 