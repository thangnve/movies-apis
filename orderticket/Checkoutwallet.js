import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, Image } from "react-native";
export default function Checkoutwallet(){
 return(
 
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginVertical: 10}}>
        <Text style={styles.title}>Checkout Movie</Text>
        </View>
          <View style= {{padding: 10, marginVertical: 10}}>

         
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 20, justifyContent: 'space-around', height: 185}}>
      
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/LogoFrim.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>Ralph Breaks the Internet</Text>
        
       <View style={{flexDirection: 'row'}}>
       <Image style={{width: 15, height: 15}} source={require('./Image/staric.png')} />
       <Image style={{width: 15, height: 15}} source={require('./Image/staric.png')} />
       <Image style={{width: 15, height: 15}} source={require('./Image/staric.png')} />
       <Image style={{width: 15, height: 15}} source={require('./Image/staric.png')} />
       <Image style={{width: 15, height: 15}} source={require('./Image/staric.png')} />
       <Text style={{color: '#FFFFFF', top: -1.5}}>(5.0)</Text>
       </View>
       <View>
        <Text style={{fontSize: 14,  color: 'rgba(255, 255, 255, 0.7)'}}>Action adventure, Comedy</Text>
        <Text style={{fontSize: 14,  color: 'rgba(255, 255, 255, 0.7)'}}>1h 41min</Text>
       </View>
       </View>
      </View>
      <Image style={{width: 500, height: 3, left: -77}} source={require('./Image/remo.png')}/>      
          </View>
         <View style={{padding: 20, height: 200, justifyContent: 'space-around'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           <Text style={{color: '#FFFFFF'}}>ID Order</Text>
           <Text  style={{color: '#FFFFFF'}}>22081996</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           <Text style={{color: '#FFFFFF'}}>Cinema</Text>
           <Text  style={{color: '#FFFFFF'}}>FX Sudirman XXI</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           <Text style={{color: '#FFFFFF'}}>Date & Time</Text>
           <Text  style={{color: '#FFFFFF'}}>Sun May 22,  16:40</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           <Text style={{color: '#FFFFFF'}}>Seat Number</Text>
           <Text  style={{color: '#FFFFFF'}}>D7,D8,D9</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           <Text style={{color: '#FFFFFF'}}>Price</Text>
           <Text  style={{color: '#FFFFFF'}}>Rp 50.000 x 3</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           <Text style={{color: '#FFFFFF'}}>Total</Text>
           <Text  style={{color: '#FFFFFF'}}>Rp 150.000</Text>
          </View>
          
          </View>
          <Image style={{width: 500, height: 3, left: -70}} source={require('./Image/remo.png')}/>   
          <View style={{alignItems: 'center', padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, width: 300}}>
           <Text style={{color: '#FFFFFF'}}>Your Wallet</Text>
           <Text  style={{color: '#FFFFFF'}}>IDR 200.000</Text>
          </View> 
          </View>
            <View style={{ alignItems: 'center'}}>
                <TouchableOpacity style={{backgroundColor: '#3D54F8', width: 250, height: 60, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>Checkout</Text>
                </TouchableOpacity>
            </View>
      </View>

 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051138'
  }, 
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    width: 90
  }
})