import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          {/* 1 */}
          <View style={styles.row}>
              <Text style={styles.number}>1</Text>
          </View>
          {/* 4 GHI */}
          <View style={styles.row}>
              <Text style={styles.number}>4</Text>
              <Text style={styles.text}>GHI</Text>
          </View>
          {/* 7 PQRS */}
          <View style={styles.row}>
              <Text style={styles.number}>7</Text>
              <Text style={styles.text}>PQRS</Text>
          </View>
          {/* . */}
          <View style={styles.row}>
              <Text style={styles.dot}>.</Text>
          </View>
        </View>
        <View style={styles.column}>
          {/* 2 ABC */}
          <View style={styles.row}>
              <Text style={styles.number}>2</Text>
              <Text style={styles.text}>ABC</Text>
          </View>
          {/* 5 JKL */}
          <View style={styles.row}>
              <Text style={styles.number}>5</Text>
              <Text style={styles.text}>JKL</Text>
          </View>
          {/* 8 TUV */}
          <View style={styles.row}>
              <Text style={styles.number}>8</Text>
              <Text style={styles.text}>TUV</Text>
          </View>
          {/* 3 DEF */}
          <View style={styles.row}>
              <Text style={styles.number}>0</Text>
          </View>
        </View>
        <View style={styles.column}>
          {/* 6 MNO */}
          <View style={styles.row}>
              <Text style={styles.number}>6</Text>
              <Text style={styles.text}>MNO</Text>
          </View>
          <View style={styles.row}>
              <Text style={styles.number}>3</Text>
              <Text style={styles.text}>DEF</Text>
          </View>
          {/* 9 WXYZ */}
          <View style={styles.row}>
              <Text style={styles.number}>9</Text>
              <Text style={styles.text}>WXYZ</Text>
          </View>
          <View style={styles.row}>
              <Image style={styles.clear} source={require('./delete-512.webp')}></Image>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    flex: 1,
    borderRightColor: 'black',
    borderWidth: 0.5,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    borderTopColor: 'black',
    borderWidth: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 40,
  },
  text: {
    fontSize: 20,
  },
  clear:{
    width: 50,
    height: 50
  },
  dot:{
    fontSize: 40,
    fontWeight: 'bold'
  }
});
export default App;