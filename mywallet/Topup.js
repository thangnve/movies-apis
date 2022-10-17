import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';
export default function Topup(){
    return(
       <View style={styles.container}>
        <ScrollView>
        <View style={styles.container}>

              <Text style={{marginVertical: 10,color: '#FFFFFF', textAlign: 'center', fontSize: 24, width: 88, height: 38}}>Top Up</Text>
         <View>
            
        <TextInput
        label={'Ammount'}
          activeOutlineColor = "#FFFFFF"
          style={styles.input}
          theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF',label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
          outlineColor='#99FFFFFF'
          mode='outlined'
          textContentType='name'
        />
         </View>
         <View style={styles.vo}>
 <TouchableOpacity style={styles.Button}>
<Text  style={styles.theloai}>IDR  50.000</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>IDR 100.000</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>IDR 150.000</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text  style={styles.theloai}>IDR 200.000</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>IDR 250.000</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>IDR 300.000</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>IDR 350.000</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.Button}>
<Text style={styles.theloai}>IDR 400.000</Text>
 </TouchableOpacity>
 </View>
<View>
<TouchableOpacity style={styles.Button2}>
<Text style={{width: 80, color: '#FFFFFF'}}>Top Up Now</Text>
 </TouchableOpacity>
</View>
</View>
</ScrollView>
       </View>
    );
};
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#04103A',
    justifyContent: 'space-around',
    alignItems: 'center',
},
input: {
    width: 300,
    backgroundColor: '#051138',
    borderRadius: 10,
    fontSize: 16,
    marginVertical: 10,
    color: '#ffffff',
  },
  vo:{
    height: 282,
    display: 'flex',
    flexDirection : 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    justifyContent: 'space-around',
    alignContent: 'space-around',
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
  Button2: {
    backgroundColor: '#151D3B',
    borderRadius: 14,
    shadowRadius: 22,
    width: 252,
    height: 60,
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  theloai: {
    color: '#FFFFFF',
    width: 67,
    textAlign: 'center',
  },
})




