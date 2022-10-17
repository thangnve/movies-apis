import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
export default function Seatempty(){
    return(
      <View style={styles.container}>
        <ScrollView>


        <View style={{padding: 10}}>
        <Text style={styles.title}>Ralph Breaks the Internet</Text>
        <Text style={styles.title2}>FX Sudirman XXI</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity>
                <Image source={require('./Image/check.png')}/>
                </TouchableOpacity>
             <Text style={{color: '#FFFFFF', left: 12}}>Avaible</Text>
             </View>
             <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity>
                <Image source={require('./Image/check.png')}/>
                </TouchableOpacity>
             <Text style={{color: '#FFFFFF', left: 12}}>Booked</Text>
             </View>
             <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity>
                <Image source={require('./Image/check.png')}/>
                </TouchableOpacity>
             <Text style={{color: '#FFFFFF', left: 12}}>Your Seat</Text>
             </View>
        </View>
        <View >
            <ScrollView horizontal={true} >
            <View style={{padding: 10}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D1</Text>
                </TouchableOpacity>

            </View>
            <View style={{padding: 10, left: -20}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D2</Text>
                </TouchableOpacity>

            </View>
            <View style={{padding: 10, left: -40}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D3</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J1</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -60}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D4</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J2</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -80}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D5</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J3</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -100}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D6</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J4</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -80}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D7</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J5</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -100}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D8</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J6</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -120}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D9</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J7</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -140}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D10</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J8</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -160}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D11</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J9</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -180}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D12</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J10</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -160}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A13</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B13</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C13</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D13</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I11</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J11</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -180}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A14</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B14</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C14</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D14</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J12</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -200}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A15</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B15</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C15</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D15</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E13</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F13</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G13</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H13</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I13</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J13</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -220}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A16</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B16</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C16</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D16</Text>
                </TouchableOpacity>

               <View style={{top: 12}}>   
               <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>E14</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>F14</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>G14</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>H14</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>I14</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>J14</Text>
                </TouchableOpacity>
            
               </View>


            </View>
            <View style={{padding: 10, left: -240}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A17</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B17</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C17</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D17</Text>
                </TouchableOpacity>



            </View>
            <View style={{padding: 10, left: -260}} >
                <TouchableOpacity style={{width: 36,  height: 36, margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>A18</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>B18</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>C18</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: 36, height: 36,margin: 3, borderRadius: 10, backgroundColor: '#151D3B', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF'}}>D18</Text>
                </TouchableOpacity>



            </View>
            </ScrollView>
        </View>
        <Text style={{textAlign: 'center', color: '#FFFFFF'}}>Screen</Text>
          <View>
          <Image style={{width: 350, height: 60}} source={require('./Image/screen.jpg')}/>
          </View>
         <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <View style={{padding: 10}}>
                <Text style={{color: '#FFFFFF', fontSize: 12}}>Total Price ( 3 Ticket)</Text>
                <Text  style={{color: '#FFFFFF', fontSize: 20}}>Rp 150.000</Text>
            </View>
            <View>
                <TouchableOpacity style={{width: 121, height: 44, backgroundColor: '#3D54F8', borderRadius: 14, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF', textAlign: 'center'}}>Book Ticket</Text>
                </TouchableOpacity>
            </View>
         </View>
         <Text>  </Text>
         <Text>  </Text>
        </ScrollView>
      </View>
    );
};


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#051138'
}, title: {
    color: '#FFFFFF',
    width: 265,
    height: 22,
    fontSize: 18,
    lineHeight: 21
},
 title2: {
    fontSize: 12,
    color: '#FFFFFF',
    width: 99,
    height: 28
 }
})