import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Dropdown from "./Dropdown";
let country = [{ id: 1, name: 'VietNam' }, { id: 2, name: 'Mĩ' }, { id: 3, name: 'Nga' }]

export default function CinemaDate() {
    const [selectedItem, setSelectedItem] = useState(null)
    const onSelect = (item) => { setSelectedItem(item) }
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{ display: 'flex', alignItems: 'center', marginVertical: 10 }}>
                <Text style={styles.tieude}>Ralph Breaks the Internet</Text>
            </View>
            <Dropdown value={selectedItem} data={country} onSelect={onSelect} />
            <View>
            <Text style={{color: '#ffffff', padding: 20}}>Choose Date</Text>
           </View>
           <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
  

     
               <TouchableOpacity style={{backgroundColor: '#151D3B', width: 70, height: 88, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 25, textAlign: 'center'}}>SAT 21</Text>
               </TouchableOpacity>
               <Text>     </Text>
               <TouchableOpacity style={{backgroundColor: '#151D3B', width: 70, height: 88, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 30, textAlign: 'center'}}>SUN 22</Text>
               </TouchableOpacity>
               <Text>     </Text>
               <TouchableOpacity style={{backgroundColor: '#151D3B', width: 70, height: 88, borderRadius: 14, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#FFFFFF', width: 35, textAlign: 'center'}}>MON 23</Text>
               </TouchableOpacity>
               <Text>     </Text>
               <TouchableOpacity style={{backgroundColor: '#151D3B', width: 70, height: 88, borderRadius: 14, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#FFFFFF', width: 30, textAlign: 'center'}}>TUE 24</Text>
               </TouchableOpacity>
               <Text>     </Text>
               <TouchableOpacity style={{backgroundColor: '#151D3B', width: 70, height: 88, borderRadius: 14, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#FFFFFF', width: 25, textAlign: 'center'}}>WE 25</Text>
               </TouchableOpacity>
               <Text>     </Text>
               <TouchableOpacity style={{backgroundColor: '#151D3B', width: 70, height: 88, borderRadius: 14, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#FFFFFF', width: 25, textAlign: 'center'}}>FRI 26</Text>
               </TouchableOpacity>
               <Text>     </Text>
               <TouchableOpacity style={{backgroundColor: '#151D3B', width: 70, height: 88, borderRadius: 14, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#FFFFFF', width: 30, textAlign: 'center'}}>STA 27</Text>
               </TouchableOpacity>
               <Text>     </Text>
  
            </ScrollView>
           </View>
           <View>
            <Text style={{color: '#ffffff', left: 15}}>Central Park CGV</Text>
           </View>
           <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
            <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>12 : 20</Text>
               </TouchableOpacity>
               <Text>     </Text>
                <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>14 : 30</Text>
               </TouchableOpacity>
               <Text>     </Text>
               <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>16 : 40</Text>
               </TouchableOpacity>
               <Text>     </Text>
                <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>19 : 20</Text>
               </TouchableOpacity>
               <Text>     </Text>
            </ScrollView>
           </View>
           
           <View>
            <Text style={{color: '#ffffff', left: 15}}>FX Sudirman XXI</Text>
           </View>
           <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
            <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>12 : 20</Text>
               </TouchableOpacity>
               <Text>     </Text>
                <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>14 : 30</Text>
               </TouchableOpacity>
               <Text>     </Text>
               <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>16 : 40</Text>
               </TouchableOpacity>
               <Text>     </Text>
                <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>19 : 20</Text>
               </TouchableOpacity>
               <Text>     </Text>
            </ScrollView>
           </View>

           <View>
            <Text style={{color: '#ffffff', left: 15}}>FKelapa Gading IMAX</Text>
           </View>
           <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
            <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>12 : 20</Text>
               </TouchableOpacity>
               <Text>     </Text>
                <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>14 : 30</Text>
               </TouchableOpacity>
               <Text>     </Text>
               <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>16 : 40</Text>
               </TouchableOpacity>
               <Text>     </Text>
                <TouchableOpacity style={{backgroundColor: '#151D3B', width: 88, height: 44, borderRadius: 14, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: '#FFFFFF', width: 50, textAlign: 'center'}}>19 : 20</Text>
               </TouchableOpacity>
               <Text>     </Text>
            </ScrollView>
            <Text>     </Text>
           </View>
           <View style={{ alignItems: 'center'}}>
           <TouchableOpacity style={{backgroundColor: 'rgba(72, 202, 231, 0.1)', width: 64, height: 64, borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
           <Image 
           source={require('./Image/next.png')}/>
           </TouchableOpacity>
           </View>
      
           </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    tieude: {
        width: 265,
        height: 58,
        textAlign: 'center',
        fontSize: 24,
        color: '#FFFFFF'
    },
    container: {
        backgroundColor: '#051138',
       flex: 1,
    },
    dropdown: {
    

    

    }
})