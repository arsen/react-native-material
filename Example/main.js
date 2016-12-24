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
  Animated,
  ScrollView
} from 'react-native';

import { ThemeProvider, FlatButton, Touchable } from 'react-native-material';

export default class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider>
          <View style={styles.container}>
            <FlatButton label="Normal" style={{ marginBottom: 40 }} onPress={() => {
              console.log('onPress');
            } }
              onLongPress={() => {
                console.log('onLongPress');
              } }
              />
            <FlatButton label="Primary" primary={true} style={{ marginBottom: 40 }} />
            <FlatButton label="Secondary" secondary={true} style={{ marginBottom: 40 }} />
            <FlatButton label="Disabled" disabled={true} style={{ marginBottom: 40 }} />
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
