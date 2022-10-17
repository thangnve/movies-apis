import React, { Component } from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";

export default function Demo( {navigation} ){

  
    return(
      <View style={styles.container}>
        <Image source={require('./Image/logo.png')} />
        <Text style={styles.title}>New Experience</Text>
    
        <Text style={styles.Mota}>Watch a new movie much 
easier than any before</Text>
<Text></Text>
<Text></Text>
<Text></Text>
<TouchableOpacity style = {styles.button}  onPress={() =>{navigation.navigate("Login")}} >
    <Text style = {{color : 'white', fontWeight : 'bold'}} >Get Started</Text>
  </TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#051138',
    flex: 1,
    display: 'flex',
    alignContent: "space-around",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
   fontSize: 24,
   color: '#FFFFFF'
  },
  Mota: {
   fontStyle: "normal",
   textAlign: 'center',
   fontSize: 18,
   width: 250,
   color: 	'#008080',
  },
  button: {
    
    backgroundColor : '#1DC7F7',
    borderRadius : 50,
    height : 60,
    justifyContent : 'center',
    alignItems : 'center',
    width : 255,
    borderRadius: 20,
    color : 'white',
    margin : 10
  }
});


// import React, {useState} from "react";
// import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

// const Demo = () => {

//   const [randomColor, setRandomColor] = useState('rgb(32,0,126)');
//   const changeBackground = () => {

//      setRandomColor(randomColor === 'rgb(32,0,126)' ?'rgb(48,0,126)' : 'rgb(32,0,126)');
//   };
//   return (
//     <>
//        <View style={[styles.container,{backgroundColor: randomColor}]}>
//         <TouchableOpacity style={styles.text} onPress={changeBackground}>
//         <Text >HELLO WORLD</Text>
//         </TouchableOpacity>
//        </View>
//     </>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
   
//   },
//   text: {
//     fontSize: 30,
//      backgroundColor: '#BB2CD9',
//      paddingVertical: 10,
//      paddingHorizontal: 10,
//      borderRadius: 15,


//   },

// })

// export default Demo;