import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
export default function Succsess() {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'flex-end', height: 350, justifyContent: 'flex-end'}}>
                <Image source={require('./Image/suc.png')} />
            </View>
            <View>
                <Text style={{ color: '#FFFFFF', fontSize: 24, height: 29, textAlign: 'center' }}>
                    Happy Watching!
                </Text>
                <View style={{alignItems: 'center', height: 100}}>
                <Text style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 18, height: 54, textAlign: 'center' , width: 190, top: 12}}>
                    You have successfully
                    bought the ticket
                </Text>
                </View>
                
            </View>
            <View style={{ alignItems: 'center'}}>
                <TouchableOpacity style={{backgroundColor: '#3D54F8', width: 250, height: 55, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>My Ticket</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Discover new movie? </Text>
          <TouchableOpacity>
            <Text style={[styles.signUpText, { color: 'rgba(68, 158, 255, 1)' }]}>
              {'Back to home'}
            </Text>
          </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#051138',
        flex: 1,
    },
    signUpTextView: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      signUpText: {
        color: '#808e9b',
        fontSize: 14,
        fontWeight: '500',
      },
})