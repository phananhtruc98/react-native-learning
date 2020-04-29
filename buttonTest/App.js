import React, { Component } from 'react'
import { TouchableOpacity, Image, Text, View, Button, StyleSheet, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'

export default class App extends Component {
  _onPressButton = () => {
    alert('You pressed the button!');
  }
  render() {
    return (
      <View style={styles.btn}>
        <View>
          <Button title="Learn more"
            color="#841584"
            accessibilityLabel="Learn more about this purple button" />
        </View>
        <View style={styles.btn}>
          {/* TouchableHighLight */}
          <TouchableHighlight
            onPress={this._onPressButton}
            activeOpacity={0.6}
            underlayColor='"#DDDDDD"'
            onPress={() => alert('Pressed!')}>
            <View style={{ backgroundColor: 'green' }}>
              {/* <Image
            style={{width:100,height:40}}
            source={require('./images/red-button.png')}></Image> */}
              <Text style={styles.touchable}>Touchable Highlight</Text>
            </View>
          </TouchableHighlight>

          {/* TouchableNativeFeedback */}
          <TouchableNativeFeedback
            onPress={this._onPressButton}
            useForeground={false}
          >
            <View style={{
              width: 300,
              height: 50,
              margin: 20,
              backgroundColor: 'blue'
            }}>
              <Text style={{ margin: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>TouchableNativeFeedback</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableOpacity
            onPress={this._onPressButton}>
            <View style={{
              width: 300,
              height: 50,
              margin: 20,
              backgroundColor: 'red'
            }}>
              <Text style={styles.touchable}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          <TouchableWithoutFeedback
            // onPress={this._onPressButton}
            // onPressIn={() =>{
            //   alert("onPressIn");
            // }}
            // onPressOut={() =>{
            //   alert("onPressOut");
            // }}
            // disabled={true}
           onLongPress={() => {
             alert("onLongPress");
           }}
           >              
            <View style={{
              width: 300,
              height: 50,
              margin: 20,
              backgroundColor: 'purple'
            }}>
              <Text style={styles.touchable}>TouchableOpacity</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    flex: 1, flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    color: 'white',
    padding: 20,
    fontSize: 18,
    textAlign: 'center',
  }
});