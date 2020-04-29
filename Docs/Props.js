import React, { Component } from 'react';
import { StyleSheet,View,Image,Text } from 'react-native';

class Greeting extends Component {
  render(){
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={[styles.red, styles.bigBlue]}>Hello {this.props.name}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
export default class LotsOfGreetings extends Component{  
  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
      <View style={{alignItems:'center', top: 50}}>
        <Greeting name="Lam React Native di ku" />
        <Greeting name="Buoi sang" />
        <Greeting name="Truc" />
      </View>
      <Image source={pic} style={{width:193, height:110, marginTop: 50}}/>
      </View>
    );
  }
}