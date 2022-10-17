import React from "react";
import { useState } from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Dropdown({ data = [], value = {}, onSelect = () => { } }) {
    const [showOption, setShowOption] = useState(false)
    const onSelectedItem = (val) => {
        setShowOption(false)
        onSelect(val)
    }
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.dropdown} activeOpacity={0.8} >
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Image source={require('./Image/map.png')} />
                        <Text style={{ color: '#FFFFFF', left: 15 }}>{!!value ? value?.name : `Choose an Country`}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setShowOption(!showOption)}>
                        <Image style={{ transform: [{ rotate: showOption ? '180deg' : '0deg' }] }} source={require('./Image/down.png')} />
                    </TouchableOpacity>
                </TouchableOpacity>
                {showOption && (<View>
                    {data.map((val, i) => {
                        return (
                            <TouchableOpacity
                                key={String(i)}
                                onPress={() => onSelectedItem(val)}
                                style={{ backgroundColor: 'white', paddingVertical: 8, borderRadius: 10, paddingHorizontal: 6, backgroundColor: '#051138', borderWidth: 1, borderColor: '#FFFFFF', top: 12 }}
                            >
                                <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>{val.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>)}
            </View>
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
        alignItems: 'center',
        flex: 1,
    },
    dropdown: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 0,
        width: 327,
        top: 10,

        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFFFFF',
        minHeight: 42,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    }
})