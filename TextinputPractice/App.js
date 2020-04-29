/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet, Keyboard
} from 'react-native';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: 'Please type your text',
      typedPassword:'',
      typedDescription: ''
    }
  }

  componentWillMount(){
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',()=>{
      this.setState(()=>{
        return {typedText: 'Keyboard is shown'}

      })
    });
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidHide',()=>{
      this.setState(()=>{
        return {typedText: 'Keyboard is hidden'}
      })
    });
  }
  componentWillUnmount(){
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  render() {
    return (
      <View>
        <TextInput style={styles.textinput}
          keyboardType='email-address'
          placeholder='Enter your email'
          placeholderTextColor='green'
          onChangeText={
            (text) => {
              this.setState(
                (previousState) => {
                  return {
                    typedText: text
                  };
                }
              );
            }
          } 
          autoFocus={true}/>
        <Text style={{ marginLeft: 20 }}>{this.state.typedText}</Text>
        <TextInput style={styles.textinput}
        keyboardType='default'
        placeholder='Change your password'
        secureTextEntry={true} 
        onChangeText={(text) => {this.setState()
          return{
            typedPassword: text
          };
          }}/>
        <TextInput 
        style={styles.textarea}
        multiline={true}
        placeholder='Enter your description'
        placeholderTextColor='green'
        borderBottomColor='green'
        borderLeftColor='blue'
        borderRightColor='red'
        borderBottomWidth={3}
        borderLeftWidth={3}
        borderRightWidth={3}
        editable={true}        
        returnKeyType='done'
        onSubmitEditing={Keyboard.dismiss}
        blurOnSubmit={true}
        onChangeText={
          (text) => {this.setState(()=>{
            return{
              typedDescription: text
            };
          })}
        }
        />
        <Text style={{ marginLeft: 20 }}>{this.state.typedDescription}</Text>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  textinput: {
    height: 40,
    margin: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  textarea:{
    height: 100,
    margin: 20,
    padding: 10, 
    borderWidth: 1,
  }
});
export default App;
