import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import SettingsScreen from './screens/SettingsScreen';
import Home from '../orderticket/Home';

import Ticketall from '../myticket/Ticketall';
import Walletall from '../mywallet/Walletall';

//Screen names
const homeName = "Movies";
const detailsName = "Wallet";
const settingsName = "My Ticket";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (

      <Tab.Navigator
  
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' :   <Image source={require('./Image/home.png')} />;

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : <Image source={require('./Image/wallet.png')} />;

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : <Image source={require('./Image/ticket.png')} />;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarStyle: { backgroundColor: '#04103A',},
        
        })}
        
        tabBarOptions={{
          
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#42476A',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
   
        }}>
        
        <Tab.Screen  name={homeName} component={Home}  />
        <Tab.Screen name={detailsName} component={Walletall} />
        <Tab.Screen name={settingsName} component={Ticketall} />

      </Tab.Navigator>

  );
}

export default MainContainer;