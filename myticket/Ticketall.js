import {Image, View, Text, SafeAreaView, StyleSheet, ScrollView,  Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const FirstRoute = () => (
  <View  style={[styles.scene, { backgroundColor: '#04103A' }]} >
            <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/LogoFrim.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>Ralph Breaks the Internet</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>
      
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie2.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>How To Train Your Dragon</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>

           
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie3.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>The Spongebob Movie</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>

           
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie4.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>Onward</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>

           
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie5.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>SCOOB!</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>

           
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie6.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>Frozen II</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>
  </View>
  
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#04103A' }]} >
        <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/LogoFrim.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>Ralph Breaks the Internet</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>
      
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie2.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>How To Train Your Dragon</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>

           
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie3.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>The Spongebob Movie</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>

           
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie4.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>Onward</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>
  </View>
);

const ThriceRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#04103A' }]} >
         <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie5.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>SCOOB!</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>

           
      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 10, justifyContent: 'space-around', height: 145, left: -15}}>
      <Image style={{width: 88, height: 133, borderRadius: 8}} source={require('./Image/Movie6.jpg')}/>   
    <View style={{justifyContent: 'space-around', height: 120, left: -15}}>
       <Text style={{fontSize: 16, color: '#FFFFFF', width: 150}}>Frozen II</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>16:40, Sun May 22</Text>
        <Text style={{color: 'rgba(255, 255, 255, 0.7)'}}>FX Sudirman XXI</Text>
       </View>
      </View>
    </View>
  );

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  thrice: ThriceRoute,
});
export default function Ticketall() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'All' },
      { key: 'second', title: 'News' },
      { key: 'thrice', title: 'Expired' },
    ]);
   return(
    
     <View style={{backgroundColor: '#04103A' , padding: 10}}>
        <ScrollView>
            <Text style={{width: 119, height: 38, fontSize: 24, marginVertical: 10, left: 15, color: '#FFFFFF'}}>My Ticket</Text>
  
    <View style={{height: 1000, width: '100%'}}>
    
      
    
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#04103A'}}/>}
      onIndexChange={setIndex}
      initialLayout={initialLayout}

     
    />
       
    </View>
      </ScrollView>
    
      </View>


   
   );
};

const styles = StyleSheet.create({
   banner: {
  
    width: '100%',
    height: 200,

   },
   banner2: {
      width: 124,
      height: 191,
      top: -60,
      
   },
   container: {
    
  },
  scene: {
    flex: 1,
 
  },

})



