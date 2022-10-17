
// import React, { useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
 
//   StatusBar,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   VirtualizedList,
//   SafeAreaView,


// } from 'react-native';
// import { TextInput } from 'react-native-paper';


// export default function EditProfile() {
//   useEffect(() => {
//     StatusBar.setBarStyle('light-content', true);
//   }, []);
//   //  var btnd = ;  
//   const [text, onChangeText] = React.useState("");



//   return (

//     <SafeAreaView

//       colors={['#222', '#222', '#111']}
//       style={styles.container}
//     >
// <View>
// <ScrollView>



// <View  style={styles.container}>




//       <Text style={styles.loginText} >Edit Your Profile</Text>
//       <Image style={styles.image} source={require('./Image/person.png')} />
//       <View style={styles.loginWithBar}>
//         <TouchableOpacity style={styles.iconButton}>
//           <Image style={styles.anh} source={require('./Image/addp.png')} />
//           {/* <Icon name='facebook-square' type='font-awesome' size={30} color='#808e9b' /> */}
//         </TouchableOpacity>

//       </View>

//       </View>
//       <Text></Text>
//       <TextInput style={styles.textoutline}
//         label='FullName'
//         mode='outlined'
//         activeOutlineColor="#FFFFFF"
//         theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
//         outlineColor='#99FFFFFF'
//         direction='rtl'
//         underlineColor='transparent' />

//       <Text></Text>
//       <TextInput style={styles.textoutline}
//         label='Email Address'
//         mode='outlined'
//         activeOutlineColor="#FFFFFF"
//         theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
//         outlineColor='#99FFFFFF'
//         direction='rtl'
//         underlineColor='transparent' />
    
//       <Text></Text>

//       <TextInput style={styles.textoutline}
//         label='Password'
//         mode='outlined'
//         activeOutlineColor="#FFFFFF"
//         theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
//         outlineColor='#99FFFFFF'
//         direction='rtl'
//         secureTextEntry={true}
//         underlineColor='transparent' />
   
//       <Text></Text>
//       <TextInput style={styles.textoutline}
//         label='Confirm Password'
//         mode='outlined'
//         secureTextEntry={true}
//         activeOutlineColor="#FFFFFF"
//         theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
//         outlineColor='#99FFFFFF'
//         direction='rtl'
//         underlineColor='transparent' />
      
//       <Text></Text>



//       <TouchableOpacity style={styles.loginButton} >
//         <Text style={styles.loginButtonText}>Update My Profile</Text>
//       </TouchableOpacity>

//       </ScrollView>
//       </View>
//     </SafeAreaView>

//   );
// }

// const styles = StyleSheet.create({
//   anh: {
//     width: 24,
//     height: 24,
//   },
//   container: {
//     flex: 1,

//     display: 'flex',
  
  
//     backgroundColor: '#051138',
//     paddingHorizontal: 20,
//   },
//   textoutline: {
//     backgroundColor: '#051138',
//     borderRadius: 50,



//   },
//   welcomeText: {
//     fontSize: 30,
//     fontWeight: '900',
//     color: '#fff',
//     alignSelf: 'center',
//   },
//   loginText: {
//     color: '#ffffff',
//     fontSize: 28,
//     width: 150,
//     height: 72,
//     top: 15,
//     textAlign : 'center',
//     left: 65,
//     display: 'flex',
//     fontSize: 24,
//     fontWeight: 'bold',

//     marginBottom: 10,
//   },

//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,



//     borderColor: '#FFFFFF',
//     backgroundColor: '#051138',


//   },
//   fpText: {
//     alignSelf: 'flex-end',
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//     marginTop: 10,
//   },
//   loginButton: {
//     backgroundColor: '#3D54F8',
//     paddingVertical: 15,
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: 50,
//     left: 30,
//     top: -25,
//     borderRadius: 20,
//     width: 255,
//     height: 60,

//   },

//   loginButtonText: {
//     fontSize: 20,
//     fontWeight: '500',
    
//     color: '#fafafa',
//     alignSelf: 'center',
//   },
//   loginWithBar: {
//     left : 118,
//     width: 44,
//     marginTop: -15,
//   },
//   iconButton: {
//     backgroundColor: '#333',

   
//     marginHorizontal: 10,
//     borderRadius: 100,
//   },
//   signUpTextView: {
//     marginTop: 20,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   signUpText: {
//     color: '#808e9b',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   image: {
//     left: 95,
//     width: 90,
//     height: 90,
    
//     borderRadius: 52,
//   },
//   title: {
//     position: 'absolute',
//     width: 199,
//     height: 72,
//     left: 24,
//     top: 206,
//     fontSize: 24,

//     /* or 36px */


//     color: '#FFFFFF',


//   },
// });


// import React, { useEffect, Component, useState } from 'react';
// import { Alert } from 'react-native';
// import {
//   StyleSheet,
//   Text,
//   View,

//   StatusBar,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   VirtualizedList,
//   SafeAreaView,


// } from 'react-native';
// // import firestore, { firebase } from '@react-native-firebase/firestore';
// import { TextInput } from 'react-native-paper';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

// export default class Logup extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       fullname: '',
//       confirmPassword: '',
//       imageSource: null,

//     }



//   }
//   componentDidMount() {
//     // firebase.initializeApp(config);
//     // var db = firebase.firestore();
//   }


//   selectImage() {
//     let options = {
//       title: 'You can choose one image',
//       maxWidth: 256,
//       maxHeight: 256,


//       allowsEditing: true,
//       mediaType: 'photo',
//       includeBase64: true,
//       storageOptions: {
//         skipBackup: true
//       }
//     };


//     launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//         Alert.alert('You did not select any image');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = { uri: response };

//         // ADD THIS
//         this.setState(...this.state, {
//           imageSource: source
//         });
//       }
//     });
//   }
//   Dangky() {
//     let errorFlag = false;
//     if (this.state.password !== this.state.confirmPassword) {
//       errorFlag = true;


//       Alert.alert(
//         'Alert Title',
//         'Đăng ký Ngu: ',
//         [
//           { text: 'Cancel', onPress: () => console.log('Cancel Presed'), style: 'cancel' },
//           { text: 'OK', onPress: () => console.log('OK Pressed') },
//         ],
//         { cancelable: false }
//       )
//     } else if (this.state.password == this.state.confirmPassword) {
//       auth().createUserWithEmailAndPassword(this.state.email, this.state.password, this.state.fullname)
//         .then(() => {
//           firestore()
//             .collection('Users')
//             .add({
//               email: this.state.email,
//               password: this.state.password,
//               fullname: this.state.fullname,
//               confirmPassword: this.state.confirmPassword,
//             })

//             .then(() => {



//             });

//           Alert.alert(
//             'Alert Title',
//             'Đăng ký thành công: ' + this.state.email,
//             [
//               { text: 'Cancel', onPress: () => console.log('Cancel Presed'), style: 'cancel' },
//               { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
//             ],
//             { cancelable: false }
//           )
//           this.setState(...this.state,{
//             email: '',
//             password: '',
//             fullname: '',
//             confirmPassword: '',
//             imageSource: source,
          
//           })
//         })
//         .catch(function (error) {

//           Alert.alert(
//             'Alert Title',
//             'Đăng ký thất bại: ',
//             [
//               { text: 'Cancel', onPress: () => console.log('Cancel Presed'), style: 'cancel' },
//               { text: 'OK', onPress: () => console.log('OK Pressed') },
//             ],
//             { cancelable: false }
//           )
//         });


//     }

//   }

//   renderFileData() {
//     if (this.state.fileData) {
//       return <Image source={{ uri: 'data:images/jpeg;base64,' + this.state.fileData }}
//         style={styles.images}
//       />
//     } else {
//       return <Image source={require('./Image/aka.png')}
//         style={styles.images}
//       />
//     }
//   }

//   renderFileUri() {
//     if (this.state.imageSource) {
//       return <Image
//         source={{ uri: `data:image/jpg;base64,${imageSource.uri.assets[0].base64}` }}
//         style={STYLES.imageBox}
//         resizeMode='contain'
//       />
//     } else {
//       return <Image
//         source={require('./Image/aka.png')}
//         style={STYLES.imageBox}
//         resizeMode='contain'
//       />
//     }
//   }


//   render() {

//     let img = this.state.imageSource == null ? null : <Image source={this.state.imageSource} style={{ width: 200, height: 200, backgroundColor: 'red' }} />
//     return (

//       <SafeAreaView

//         colors={['#222', '#222', '#111']}
//         style={styles.container}
//       >

//         <View style={styles.container}>


//           <Text style={styles.loginText} >Create New Your Account</Text>
//           {/* <View style={{top: -45, width: 50, height: 50, left: 50}}>
//             <Image
//       source={require('./Image/aka.png')}
//       style={STYLES.imageBox}
//       resizeMode='contain'
//     />
//           </View> */}
//           {img}
//           <View style={styles.loginWithBar}>
//             <TouchableOpacity style={styles.iconButton} onPress={this.selectImage} >
//               <Image style={styles.anh} source={require('./Image/icon.png')} />
//               {/* <Icon name='facebook-square' type='font-awesome' size={30} color='#808e9b' /> */}
//             </TouchableOpacity>

//           </View>

//         </View>
//         <Text></Text>
//         <TextInput style={styles.textoutline}
//           label='FullName'
//           mode='outlined'
//           activeOutlineColor="#FFFFFF"
//           theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
//           outlineColor='#99FFFFFF'
//           direction='rtl'
//           onChangeText={(fullname) => this.setState({ fullname })}
//           value={this.state.fullname}
//           underlineColor='transparent' />

//         <Text></Text>
//         <TextInput style={styles.textoutline}
//           label='Email Address'
//           mode='outlined'
//           onChangeText={(email) => this.setState({ email })}
//           value={this.state.email}
//           activeOutlineColor="#FFFFFF"
//           theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
//           outlineColor='#99FFFFFF'
//           direction='rtl'
//           underlineColor='transparent' />

//         <Text></Text>

//         <TextInput style={styles.textoutline}
//           label='Password'
//           mode='outlined'
//           activeOutlineColor="#FFFFFF"
//           theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
//           outlineColor='#99FFFFFF'
//           direction='rtl'
//           onChangeText={(password) => this.setState({ password })}
//           value={this.state.password}
//           secureTextEntry={true}
//           underlineColor='transparent' />

//         <Text></Text>
//         <TextInput style={styles.textoutline}
//           label='Confirm Password'
//           mode='outlined'
//           secureTextEntry={true}
//           onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
//           value={this.state.confirmPassword}
//           activeOutlineColor="#FFFFFF"
//           theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
//           outlineColor='#99FFFFFF'
//           direction='rtl'
//           underlineColor='transparent' />

//         <Text></Text>



//         <TouchableOpacity style={styles.loginButton} onPress={() => { this.Dangky() }}>
//           <Text style={styles.loginButtonText}>Đăng Kýs</Text>
//         </TouchableOpacity>



//       </SafeAreaView>

//     );

//   }
// }



// const styles = StyleSheet.create({
//   anh: {
//     width: 24,
//     height: 24,
//   },
//   container: {
//     flex: 1,

//     display: 'flex',


//     backgroundColor: '#051138',
//     paddingHorizontal: 20,
//   },
//   textoutline: {
//     backgroundColor: '#051138',
//     borderRadius: 50,



//   },
//   images: {
//     width: 100,
//     height: 100,
//     alignItems: 'center',
//     borderColor: 'black',
//     borderWidth: 1,
//     marginHorizontal: 3,
//     backgroundColor: 'blue',


//     borderRadius: 52,
//   },
//   welcomeText: {
//     fontSize: 30,
//     fontWeight: '900',
//     color: '#fff',
//     alignSelf: 'center',
//   },
//   loginText: {
//     color: '#ffffff',
//     fontSize: 28,
//     width: 150,
//     height: 72,
//     top: 15,
//     textAlign: 'center',
//     left: 65,
//     display: 'flex',
//     fontSize: 24,
//     fontWeight: 'bold',

//     marginBottom: 10,
//   },

//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,



//     borderColor: '#FFFFFF',
//     backgroundColor: '#051138',


//   },
//   fpText: {
//     alignSelf: 'flex-end',
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//     marginTop: 10,
//   },
//   loginButton: {
//     backgroundColor: '#3D54F8',
//     paddingVertical: 15,
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: 50,
//     left: 30,
//     top: -25,
//     borderRadius: 20,
//     width: 255,
//     height: 60,

//   },

//   loginButtonText: {
//     fontSize: 20,
//     fontWeight: '500',

//     color: '#fafafa',
//     alignSelf: 'center',
//   },
//   loginWithBar: {
//     left: 118,
//     width: 44,
//     marginTop: -15,
//   },
//   iconButton: {
//     backgroundColor: '#333',
//     top: 20,
//     width: 24,
//     marginHorizontal: 10,
//     borderRadius: 100,
//   },
//   signUpTextView: {
//     marginTop: 20,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   signUpText: {
//     color: '#808e9b',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   image: {
//     left: 95,
//     width: 90,
//     height: 90,

//     borderRadius: 52,
//   },
//   title: {
//     position: 'absolute',
//     width: 199,
//     height: 72,
//     left: 24,
//     top: 206,
//     fontSize: 24,

//     /* or 36px */


//     color: '#FFFFFF',


//   },
// });
// const STYLES = StyleSheet.create({
//   // rest of the styles remain same
//   // ADD BELOW
//   imageContainer: {
//     marginVertical: 20,
//     borderWidth: 5,
//     borderColor: '#ff5555'
//   },
//   imageBox: {
//     width: 150,
//     height: 150
//   }
// });


///

import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet, Image, Alert} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import  auth  from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { TextInput } from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
const EditProfile = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [fullname, setFullname] = useState();
  const [imageSource, setImageSource] = useState(null);

  const [userData, setUserData] = useState(null);

  const handleUpdate = () => {
 
    firestore()
    .collection('userss')
    .doc('VsULViPeDPXEXiIgRvNZLVqHbli2')
    .update({
 
      fullname: userData.fullname,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      imageSource: imageSource,
    })
    .then(() => {
      console.log('User Updated!');
      Alert.alert(
        'Profile Updated!',
        'Your profile has been updated successfully.'
      );
    })
  }
  const register = () => {
    let errorFlag = false;
        if(email == null || password == null || confirmPassword == null || fullname == null ){
          Alert.alert(
            'Thông Báo',
            'Bạn chưa nhập đầy đủ thông tin: ',
            [
              { text: 'Cancel', onPress: () => console.log('Cancel Presed'), style: 'cancel' },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
          )
        }
       else if (password !== confirmPassword) {
          errorFlag = true;
    
          Alert.alert(
            'Alert Title',
            'Đăng ký Ngu: ',
            [
              { text: 'Cancel', onPress: () => console.log('Cancel Presed'), style: 'cancel' },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
          )
        } else if (password == confirmPassword) {
      try {
        auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          //Once the user creation has happened successfully, we can add the currentUser into firestore
          //with the appropriate details.
          firestore().collection('userss').doc(auth().currentUser.uid)
          .set({
              fname: '',
              lname: '',
              email: email,
              fullname: fullname,
              password: password,
              confirmPassword: confirmPassword,
              createdAt: firestore.Timestamp.fromDate(new Date()),
              imageSource: imageSource,
          }).then({

          })
          Alert.alert(
                        'Alert Title',
                        'Đăng ký thành công: ' + email,
                        [
                          { text: 'Cancel', onPress: () => console.log('Cancel Presed'), style: 'cancel' },
                          { text: 'OK', onPress: () => navigation.navigate('Login') },
                        ],
                        { cancelable: false }
                      )
          //ensure we catch any errors at this stage to advise us if something does go wrong
          .catch(error => {
              console.log('Something went wrong with added user to firestore: ', error);
          })
        })
        //we need to catch the whole sign up process if it fails too.
        .catch(error => {
            console.log('Something went wrong with sign up: ', error);
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
    // 

    function selectImage() {
      let options = {
        title: 'You can choose one image',
        maxWidth: 256,
        maxHeight: 256,
  
        base64: true,
        allowsEditing: false,
  
        mediaType: 'photo',
        includeBase64: true,
        storageOptions: {
          skipBackup: true
        }
      };
  
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled photo picker');
          Alert.alert('You did not select any image');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = { uri: response };
  
          // ADD THIS
          setImageSource(source);
        }
      });
    }
  
    const user = auth().currentUser;
    if (user !== null) {
 
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getIdToken() instead.
      const uid = user.uid;
    }

  return (
    <View style={styles.container}>
      <ScrollView style={{height: 550}}>


       <Text style={styles.loginText} >Edit Your Account</Text>

      <View style={STYLES.imageContainer}>
        {imageSource == null ? (
          <Image
            source={require('./Image/aka.png')}
            style={STYLES.imageBox}
            resizeMode='contain'
          />
        ) : (
          <Image
            source={{ uri: `data:image/jpg;base64,${imageSource.uri.assets[0].base64}` }}
            style={STYLES.imageBox}
            resizeMode='contain'
          />
        )}
      </View>
          <View style={styles.loginWithBar}>
           <TouchableOpacity style={styles.iconButton} onPress={selectImage} >
              <Image style={styles.anh} source={require('./Image/icon.png')} />
    
            </TouchableOpacity>
            </View>
<TextInput style={styles.textoutline}
          label='FullName'
          mode='outlined'
          activeOutlineColor="#FFFFFF"
          theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
          outlineColor='#99FFFFFF'
          direction='rtl'
          value={userData ? userData.fullname : ''}
          onChangeText={(txt) => setUserData({...userData, fullname: txt})}
          underlineColor='transparent' />

        <Text></Text>
        <TextInput style={styles.textoutline}
          label='Email Address'
          mode='outlined'
          value={userData ? userData.email : ''}
          onChangeText={(txt) => setUserData({...userData, email: txt})}
          autoCorrect={false}
          activeOutlineColor="#FFFFFF"
          theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
          outlineColor='#99FFFFFF'
          direction='rtl'
          underlineColor='transparent' />

        <Text></Text>

        <TextInput style={styles.textoutline}
          label='Password'
          mode='outlined'
          activeOutlineColor="#FFFFFF"
          theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
          outlineColor='#99FFFFFF'
          direction='rtl'
          value={userData ? userData.password : ''}
          onChangeText={(txt) => setUserData({...userData, password: txt})}
          secureTextEntry={true}
          underlineColor='transparent' />

        <Text></Text>
        <TextInput style={styles.textoutline}
          label='Confirm Password'
          mode='outlined'
          secureTextEntry={true}
          value={userData ? userData.confirmPassword : ''}
          onChangeText={(txt) => setUserData({...userData, confirmPassword: txt})}
          activeOutlineColor="#FFFFFF"
          theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', label: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
          outlineColor='#99FFFFFF'
          direction='rtl'
          underlineColor='transparent' />


     

<TouchableOpacity style={styles.loginButton}  onPress={handleUpdate} >
          <Text style={styles.loginButtonText}>Update Profile</Text>
        </TouchableOpacity>

    
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Back Profile</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('Profile')}}>
            <Text style={[styles.signUpText, { color: '#B53471' }]}>
              {' Sign In'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

 const styles = StyleSheet.create({
    anh: {
      width: 24,
      height: 24,

      
    },
    container: {
      flex: 1,

      display: 'flex',
  
  
      backgroundColor: '#051138',
      paddingHorizontal: 20,
    },
    textoutline: {
      backgroundColor: '#051138',
      borderRadius: 50,
  
  
  
    },
    
    images: {
      width: 100,
      height: 100,
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
      marginHorizontal: 3,
      backgroundColor: 'blue',
  
  
      borderRadius: 52,
    },
    welcomeText: {
      fontSize: 30,
      fontWeight: '900',
      color: '#fff',
      alignSelf: 'center',
    },
    loginText: {
      color: '#ffffff',
      fontSize: 28,
      width: 150,
      height: 72,
      top: 15,
      textAlign: 'center',
      left: 80,
   
      display: 'flex',
      fontSize: 24,
      fontWeight: 'bold',
  
      marginBottom: 10,
    },
  
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
  
  
  
      borderColor: '#FFFFFF',
      backgroundColor: '#051138',
  
  
    },
    fpText: {
      alignSelf: 'flex-end',
      color: '#FFFFFF',
      fontSize: 12,
      fontWeight: '600',
      marginTop: 10,
    },
    loginButton: {
      backgroundColor: '#3D54F8',
      paddingVertical: 15,
      display: 'flex',
      justifyContent: 'center',
      marginTop: 50,
      left: 30,
      top: -25,
      borderRadius: 20,
      width: 255,
      height: 60,
  
    },
  
    loginButtonText: {
      fontSize: 20,
      fontWeight: '500',
  
      color: '#fafafa',
      alignSelf: 'center',
    },
    loginWithBar: {
      left: 118,
      width: 44,
      marginTop: -15,
    },
    iconButton: {
      backgroundColor: '#333',
      top: -15,
      width: 24,
      left: 15,
      marginHorizontal: 10,
      borderRadius: 100,
    },
    signUpTextView: {
 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    signUpText: {
      color: '#808e9b',
      fontSize: 14,
      fontWeight: '500',
    },
    image: {
      left: 95,
      width: 90,
      height: 90,
  
      borderRadius: 52,
    },
    title: {
      position: 'absolute',
      width: 199,
      height: 72,
      left: 24,
      top: 206,
      fontSize: 24,
  
      /* or 36px */
  
  
      color: '#FFFFFF',
  
  
    },
  });
  const STYLES = StyleSheet.create({
    // rest of the styles remain same
    // ADD BELOW
    imageContainer: {
      width: 120,
      left: 95,
    
      borderRadius: 30,

    },
    imageBox: {
      width: 100,
      height: 100,
      borderRadius: 50,
      left: 10,
      borderWidth: 2,
      borderColor: 'black',
      
    }
  });




