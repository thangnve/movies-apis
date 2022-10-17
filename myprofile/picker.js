import { cp } from 'fs';
import React, { useState } from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';


export default function picker () {

  

  const [imageSource, setImageSource] = useState();

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


  return (
    <View
      style={[
        STYLES.flex,
        STYLES.centerContainer,
        { backgroundColor: 'red' }
      ]}
    >
      <Text style={[STYLES.title, { color: 'blue' }]}>
        Simple Image Picker
      </Text>
      {/* ADD THIS */}
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
      <TouchableOpacity
        onPress={selectImage}
        style={[
          STYLES.selectButtonContainer,
          { backgroundColor: 'yellow' }
        ]}
      >
        <Text style={STYLES.selectButtonTitle}>Pick an image</Text>
      </TouchableOpacity>
    </View>
  );
      
}


const STYLES = StyleSheet.create({
  // rest of the styles remain same
  // ADD BELOW
  imageContainer: {
    marginVertical: 20,
    borderWidth: 5,
    borderColor: '#ff5555'
  },
  imageBox: {
    width: 256,
    height: 256
  }
});