import React, { useEffect, useState } from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity,ScrollView,} from 'react-native';

export default function UserProfiling() {
  return (
      <ScrollView colors={['#222', '#222', '#111']} style={styles.container}>
 <Text style={styles.loginText} >Select Your Favoite Genre</Text>
 <View style={styles.vo}>
 <TouchableOpacity style={styles.Button}>
<Text  style={styles.theloai}>Honor</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>Aciton</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>Drama</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text  style={styles.theloai}>War</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>Comedy</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>Crime</Text>
 </TouchableOpacity>
 </View>
 <Text style={styles.loginTexts} >Select Your Favorite language</Text>
         <View style={styles.vo2}>
 <TouchableOpacity style={styles.Button}>
<Text  style={styles.theloai}>Bahasa</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>English</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>Japanese</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text  style={styles.theloai}>Korean</Text>
 </TouchableOpacity>
 </View>
       <View style={styles.vo3}>
        <TouchableOpacity style={styles.loginButton} >
        <Image style={styles.Image} source={require('./Image/aroww.png')} />
        </TouchableOpacity>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
vo:{
  height: 202,
  display: 'flex',
  flexDirection : 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignContent: 'space-around',
},
vo2:{
  height: 132,
  display: 'flex',
  flexDirection : 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignContent: 'space-around',
},
vo3: {
  height: 92,
  display: 'flex',
  flexDirection : 'row',
  justifyContent: 'space-around',
  alignContent: 'space-around',
},
  container: {
    flex: 1,
    display: 'flex',
    paddingTop: 50,
    backgroundColor: '#051138',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    alignSelf: 'center',
  },
  loginText: {
    color: '#ffffff',
    fontSize: 25,
    width: 172,
    height: 72,  
    fontSize: 24,
  },
  loginTexts: {
    color: '#ffffff',
    fontSize: 28,
    width: 203,
    height: 72,  
    fontSize: 24,
  },
  loginButton: {
    backgroundColor: '#151D3B',
    paddingVertical: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   display: 'flex',
   top: 25,
    borderRadius: 80,
    width: 54,
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
  theloai: {
    color: '#FFFFFF',
    width: 67,
    textAlign: 'center',
  },
  Image: {
    width: 21,
     height: 21,
  }
});
  
 