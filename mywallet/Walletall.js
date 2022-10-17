import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { FloatingAction } from "react-native-floating-action";
export default function Walletall(){
    return(
    <View style={styles.container}>
        <ScrollView>
            <View style={{alignItems: 'center'}}>
            <Text style={{textAlign: 'center', color: '#FFFFFF', width: 124, height: 38, fontSize: 24, marginVertical: 30}}>My Wallet</Text>
            </View>
            <View style={{alignItems: 'center'}}>
            <View style={{width: 327, height: 175, borderRadius: 30,backgroundColor: '#3D54F8', justifyContent: 'space-around'}}>
             <View style={{flexDirection: 'row', justifyContent: 'center' , top: 12}}>
             <View>
            <Text style={{color: ' rgba(255, 255, 255, 0.7)', width: 200, height: 17, fontSize: 14}}>Card Name</Text>
           <Text  style={{color: ' rgba(255, 255, 255, 0.7)', fontSize: 20, height: 24, width: 203}}>Arya Wijaya</Text>
            </View>
                <View style={{width: 25, height: 25, backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 30}}></View>
                <View style={{width: 25, height: 25, backgroundColor: '#ffffff', borderRadius: 30, left: -5}}></View>
             </View>
       
             <Text  style={{color: ' rgba(255, 255, 255, 0.7)', fontSize: 12, height: 15, width: 127, left: 30}}>6032 1506 4207 2004</Text>
    
             <Text  style={{color: '#FFFFFF', fontSize: 28, height: 34, width: 159, left: 30}}>IDR 50.000</Text>
           </View>
            </View>
            <Text  style={{color: '#FFFFFF', fontSize: 18, height: 22, width: 186, marginVertical: 10, left: 15}}>Recent Transactions</Text>


            <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/LogoFrim.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>Ralph Breaks the Internet</Text>
       <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>IDR 150.000</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
       </View>
      </View>
      
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie2.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>How To Train Your Dragon</Text>
       <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>IDR 150.000</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
       </View>
      </View>

           
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie3.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>The Spongebob Movie</Text>
       <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>IDR 150.000</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
  
       </View>
      </View>

           
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie4.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>Onward</Text>
       <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>IDR 150.000</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
       </View>
      </View>


        </ScrollView>

        <FloatingAction 
        iconHeight={30}
        onOpen={() => {alert('How Are You')}}
        iconWidth={30}
       floatingIcon={require('./Image/download.png')}
   />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#04103A',
     flex: 1
  }
})