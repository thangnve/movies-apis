import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { firebase } from "@react-native-firebase/firestore";
import firestore from "@react-native-firebase/firestore";
import  auth  from "@react-native-firebase/auth";

export default class Profile extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = auth()
    
    this.setState({ currentUser })
  }

  handleSignOut = () => {
    if(this.state.currentUser != null) {
      auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Loading'))
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }






  


render(){
  const { currentUser } = this.state

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center', top: 50}}>
           <Image style={{width: 120, height: 120}} source={require('./Image/user.png')}/>
           <Text style={{width: 250, height: 28, fontSize: 18, color: '#FFFFFF'}}>Email:{currentUser && currentUser.email} </Text>
           <Text style={{width: 210, height: 28, fontSize: 16, color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', marginBottom: 30}}>Welcome to Viet Nam</Text>

          <TouchableOpacity style={{flexDirection: 'row', width: 300, justifyContent: 'space-around', height: 20}} onPress={() => {this.props.navigation.navigate('EditProfile')}}>
           <Image style={{width: 30, height: 30}} source={require('./Image/userp.png')}/>
           <Text style={{width: 210, height: 28, fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}}>Editer Your Profile</Text>
           </TouchableOpacity>
          <Text style={{color: '#FFFFFF', width: '100%',
            fontSize: 24, textAlign: 'center'}}>- - - - - - - - - - - - - - - - - - - - - - - - -</Text>


<TouchableOpacity style={{flexDirection: 'row', width: 300, justifyContent: 'space-around', height: 20}} onPress={() => {this.props.navigation.navigate('Walletall')}}>
           <Image style={{width: 30, height: 30}} source={require('./Image/walletp.png')}/>
           <Text style={{width: 210, height: 28, fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}}>My Wallet</Text>
           </TouchableOpacity>
          <Text style={{color: '#FFFFFF', width: '100%',
            fontSize: 24, textAlign: 'center'}}>- - - - - - - - - - - - - - - - - - - - - - - - -</Text>


<TouchableOpacity style={{flexDirection: 'row', width: 300, justifyContent: 'space-around', height: 20}}>
           <Image style={{width: 30, height: 30}} source={require('./Image/languagep.png')}/>
           <Text style={{width: 210, height: 28, fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}}>Change Language</Text>
           </TouchableOpacity>
          <Text style={{color: '#FFFFFF', width: '100%',
            fontSize: 24, textAlign: 'center'}}>- - - - - - - - - - - - - - - - - - - - - - - - -</Text>


<TouchableOpacity style={{flexDirection: 'row', width: 300, justifyContent: 'space-around', height: 20}}>
           <Image style={{width: 30, height: 30}} source={require('./Image/goodp.png')}/>
           <Text style={{width: 210, height: 28, fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}}>Help Centre</Text>
           </TouchableOpacity>
          <Text style={{color: '#FFFFFF', width: '100%',
            fontSize: 24, textAlign: 'center'}}>- - - - - - - - - - - - - - - - - - - - - - - - -</Text>


<TouchableOpacity style={{flexDirection: 'row', width: 300, justifyContent: 'space-around', height: 20}} onPress={this.handleSignOut}>
           <Image style={{width: 30, height: 30}} source={require('./Image/thumbp.png')}/>
           <Text style={{width: 210, height: 28, fontSize: 16, color: 'rgba(255, 255, 255, 0.7)'}}>Rate Flutix App</Text>
           </TouchableOpacity>
          <Text style={{color: '#FFFFFF', width: '100%',
            fontSize: 24, textAlign: 'center'}}>- - - - - - - - - - - - - - - - - - - - - - - - -</Text>

            </View>
        </View>
    );
}
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#051138',
        flex: 1,
    },
   
})



// import React, {useState, useEffect, useContext} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   SafeAreaView,
//   Alert,
// } from 'react-native';

// import {AuthContext} from '../navigation/AuthProvider';

// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';

// const Profile = ({navigation, route}) => {
//   const {user}= useState(null);
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);

//   const logout = () => {

//      auth().signOut().then({})
//      Alert.alert(
//       'Đăng Xuất Tài Khoản',
//       '',
//       [
//         { text: 'Cancel', onPress: () => console.log('Cancel Presed'), style: 'cancel' },
//         { text: 'OK', onPress: () => navigation.navigate('Login') },
//       ],
//       { cancelable: false }
//     )
 
//   }
//   const getUser = async() => {
//     await firestore()
//     .collection('userss')
//     .doc( route.params ? route.params.userId : user.uid)
//     .get()
//     .then((documentSnapshot) => {
//       if( documentSnapshot.exists ) {
//         console.log('User Data', documentSnapshot.data());
//         setUserData(documentSnapshot.data());
//       }
//     })
//   }

//   useEffect(() => {
//     getUser();
//     navigation.addListener("focus", () => setLoading(!loading));
//   }, [navigation, loading]);

  

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
//         showsVerticalScrollIndicator={false}>
//         <Image
//           style={styles.userImg}

//               source={{uri: userData ? userData.imageSource || 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
//         />
//         <Text style={styles.userName}>{userData ? userData.fullname || 'Test' : 'Test'} {userData ? userData.fullname || 'User' : 'User'}</Text>
//         {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
//         <Text style={styles.aboutUser}>
//         {userData ? userData.fullname || 'No details added.' : ''}
//         </Text>
//         <View style={styles.userBtnWrapper}>
         
//               <TouchableOpacity
//                 style={styles.userBtn}
//                 onPress={() => {
//                   navigation.navigate('EditProfile');
//                 }}>
//                 <Text style={styles.userBtnTxt}>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
//                 <Text style={styles.userBtnTxt}>Logout</Text>
//               </TouchableOpacity>
        
//         </View>


//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   userImg: {
//     height: 150,
//     width: 150,
//     borderRadius: 75,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   aboutUser: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   userBtnWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     width: '100%',
//     marginBottom: 10,
//   },
//   userBtn: {
//     borderColor: '#2e64e5',
//     borderWidth: 2,
//     borderRadius: 3,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     marginHorizontal: 5,
//   },
//   userBtnTxt: {
//     color: '#2e64e5',
//   },
//   userInfoWrapper: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginVertical: 20,
//   },
//   userInfoItem: {
//     justifyContent: 'center',
//   },
//   userInfoTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   userInfoSubTitle: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//   },
// });

