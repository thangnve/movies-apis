import React, { Component } from "react";
import {View, StyleSheet, Text, Image} from "react-native";
export default class Slpash extends Component{
  constructor(props){
    super(props)
    this.state = {timer: 0}
  //   setInterval(() =>{
  //       this.setState({timer: this.state.timer + 1})
  //   }, 1000)
  }
  render(){
    return(
      <View style={styles.container}>
        <Image source={require('./Image/logo.png')} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#051138',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


});