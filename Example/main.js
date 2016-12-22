/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import { ThemeProvider, FlatButton, Touchable } from 'react-native-material';

export default class Example extends Component {
  render() {
    // <FlatButton label="Normal"/>
    // <FlatButton label="Primary" primary={true}/>
    // <FlatButton label="Secondary" secondary={true}/>
    // <FlatButton label="Disabled" disabled={true}/>

    // <View style={{width: 200, height: 200, backgroundColor: 'red', overflow: 'hidden'}}>
    //   <View style={{
    //     width: 400,
    //     height: 400,
    //     borderRadius: 400,
    //     backgroundColor: 'blue',
    //     position: 'absolute',
    //     top: -200,
    //     left: -200,

    //   }} />
    // </View>  

    if (Platform.OS === 'android') {
      return (
        <View style={styles.container}>
        <TouchableNativeFeedback>
          <View style={{ padding: 40 }}>
            <Text>Hello World</Text>
          </View>
        </TouchableNativeFeedback>
        </View>
      );

    }

    return (
      <ThemeProvider>
        <View style={styles.container}>

          <Touchable style={{ padding: 40 }}>
            <Text>Hello World</Text>
          </Touchable>

        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
