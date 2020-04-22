//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class App extends Component {  
  render() {
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
          <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}/>
          <View style={{width: 50, height: 50, backgroundColor: 'blue'}}/>
        </View>
        
        <View style={{top:150, flex: 1, flexDirection: 'column'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'pink'}}/>
          <View style={{width: 50, height: 50, backgroundColor: 'aquamarine'}}/>
          <View style={{width: 50, height: 50, backgroundColor: 'brown'}}/>
        </View>

        <View style={{top:150, flex: 1, flexDirection: 'row-reverse'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'aqua'}}/>
          <View style={{width: 50, height: 50, backgroundColor: 'navy'}}/>
          <View style={{width: 50, height: 50, backgroundColor: 'magenta'}}/>
        </View>    
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1
  },
  flex1:{
    flex:1,
    backgroundColor: 'red',
  },
  flex2:{
    flex:2,
    backgroundColor: 'yellow',
  },
  flex3:{
    flex:3,
    backgroundColor: 'green',
  },
});

//make this component available to the app
export default App;
