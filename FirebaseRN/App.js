import React, { Component } from 'react';
import { View, Text, Switch, Navigator } from 'react-native';
import Login from './Components/Login';
import Register from './Components/Register';

export default class App extends Component {
  renderScene(route, navigator){
    switch(route, name){
      case 'login': 
        return (  <Login />)
      case 'register':
        return (<Register />)
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={{name: 'login', index: 0}}
        renderScene={this.renderScene}
      />
    );
  }
}

