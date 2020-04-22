//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class App extends Component {
  render() {
    return (
      <>
      <Text style={styles.title}>position: 'relative'</Text>
        <View>
          <View style={{position: 'relative', width: 100, height: 100, top:10, left: 20, backgroundColor: 'red'}}></View>
          <View style={{position: 'relative', width: 100, height: 100, top:20, left: 30, backgroundColor: 'skyblue'}}></View>
          <View style={{position: 'relative', width: 100, height: 100, top:30, left: 70, backgroundColor: 'orange'}}></View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontFamily: "Cochin",
  },
  name: {
    backgroundColor: "green",
    fontSize: 12, 
  },
  description: {
    textAlignVertical: "center",
  },
  flex3: {
    flex: 3,
    backgroundColor: 'green',
  },
});

//make this component available to the app
export default App;
