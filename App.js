import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "./newuser/Login";
import Logup from "./newuser/Logup";
import MainContainer from "./navigation/MainContainer";
import Profile from "./myprofile/Profile";
import EditProfile from "./myprofile/EditProfile";
import Demo from "./newuser/Demo";
import Walletall from "./mywallet/Walletall";
import Ticketall from "./myticket/Ticketall";
import Loading from "./src/screen/Loading";
import Infomation from "./orderticket/Infomation";
import Home from "./orderticket/Home";
import UserProfiling from "./newuser/UserProfiling";
import Movieid from "./screens/Movieid";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
     <Stack.Navigator
      initialRouteName="Demo"
      screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Logup" component={Logup} />
      <Stack.Screen name="MainContainer" component={MainContainer} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Walletall" component={Walletall} />
      <Stack.Screen name="Ticketall" component={Ticketall} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Infomation" component={Infomation} />
      <Stack.Screen name="UserProfiling" component={UserProfiling} />
      <Stack.Screen name="Movieid" component={Movieid} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Movie from './screens/Movie';
// import Movieid from './screens/Movieid';
// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <Tab.Navigator
//     screenOptions={{
//       tabBarActiveTintColor: '#7DD329',
//       tabBarInactiveTintColor: 'gray',
//       tabBarShowLabel: false,  
//       headerShown: false,
//       tabBarLabelStyle: {
//         fontSize: 15
//       },
//       tabBarStyle: {
//         height: 60,
//         paddingHorizontal: 5,
//         paddingBottom: 3,
//         backgroundColor: 'rgba(39, 39, 42, 1)',
//         position: 'absolute',
//         borderTopWidth: 0,
//     },
//     }}
//     >
//     <Tab.Screen
//       name="Movie"
//       component={Movie}
//       options={{
//         tabBarLabel: 'Movie',
//         tabBarIcon: ({ color, size }) => (
//           <Icon name="film-outline" color={color} size={30} />
//         ),
//       }}
//     />
//   </Tab.Navigator>
//   );
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//       screenOptions={{
//         headerShown: false
//       }}>
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         <Stack.Screen name="Movieid" component={Movieid} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
