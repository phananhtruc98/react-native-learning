//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class App extends Component {
  constructor(){
    super()
    this.state={}
    this.state.customStyles = {
      color: 'red'
    }
    setInterval(() => {
      if(this.state.customStyles.color=='red'){
        this.setState({
          customStyles: {
            color: 'green'
          }
        })
      }
      else{
        this.setState({
          customStyles: {
            color: 'red'
          }
        })
      }
      
    }, 1000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, this.state.customStyles]}>
          Hello World!
        </Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    color:'red'
  },
  welcome: {
    fontSize:20,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
  instructions:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//make this component available to the app
export default App;
