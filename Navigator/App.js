/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.link}
        onPress={() => {
          navigation.push('Detail');
        }}
      >Go to detail</Text>
    </View>
  );
};

const Detail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <Text style={styles.link}
        onPress={() => {
          navigation.goBack();
        }}
      >Goback</Text>
      <Text style={styles.link}
        onPress={() => {
          navigation.replace('Login');
        }}
      >Logout</Text>

    </View>
  );
};
const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Text style={styles.link}
        onPress={() => {
          navigation.replace('Home');
        }}
      >Login</Text>
    </View>
  );
};

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}></Stack.Screen>
          <Stack.Screen name='Home' component={Home}></Stack.Screen>
          <Stack.Screen name='Detail' component={Detail}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
  },
  link: {
    color: 'blue',
    fontSize: 30
  }
});

export default App;
