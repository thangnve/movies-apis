import React from "react";
import { ScrollView } from "react-native";
import {View, StyleSheet, Text, Image} from 'react-native';
export default function TicketDetails(){
    return(
        <View style={styles.container}>
        <ScrollView>


       <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 24, marginVertical: 20}}>Ticket Details</Text>
        <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 20, justifyContent: 'space-around', height: 155}}>
      
      <Image style={{width: 86, height: 133, borderRadius: 8}} source={require('./Image/LogoFrim.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 130, left: -15}}>
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

      <View style={{padding: 30, height: 200, justifyContent: 'space-around', top: -20}}>
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
           <Text style={{color: '#FFFFFF'}}>Paid</Text>
           <Text  style={{color: '#FFFFFF'}}>IDR 150.000</Text>
          </View>
          </View>
          <View>
            <Text style={{color: '#FFFFFF', width: '100%',
            fontSize: 24, textAlign: 'center', top: -50}}>- - - - - - - - - - - - - - - - - - - - - - - - -</Text>
          </View>
          <View style={{alignItems: 'center', top: -50}}>
            <View style={{backgroundColor: '#FFFFFF', width: 180 ,height: 180, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 169, height: 169}} source={require('./Image/QR.jpg')}/> 
            </View>
            <Text style={{color: ' rgba(255, 255, 255, 0.7)', width: 61, height: 17, fontSize: 14}}>ID Order</Text>
           <Text  style={{color: ' rgba(255, 255, 255, 0.7)', textAlign: 'center', fontSize: 20, height: 24, width: 93}}>22081996</Text>

          </View>
          </ScrollView>
      </View>
    )
}


const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#04103A',
 }
})