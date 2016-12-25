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
  TouchableWithoutFeedback,
  Platform,
  Animated,
  ScrollView
} from 'react-native';

import {
  ThemeProvider,
  FlatButton,
  RaisedButton,
  Icon,
  Touchable,
  MaterialView,
  Paper,
} from 'react-native-material';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elevation: new Animated.Value(2),
      icon: 'hourglass-empty',
    };
  }

  componentDidMount() {
    Animated.timing(this.state.elevation, {
      toValue: 20,
      duration: 500
    }).start();

  }

  // <Paper elevation={5} style={{ backgroundColor: 'red', padding: 50 }}>
  //   <Text>Hello</Text>
  // </Paper>

  // <FlatButton label="Normal" style={{ marginBottom: 20 }} onPress={() => {
  //   console.log('onPress');
  // } } />
  // <FlatButton label="Primary" primary={true} style={{ marginBottom: 20 }} />
  // <FlatButton label="Secondary" secondary={true} style={{ marginBottom: 20 }} />
  // <FlatButton label="Disabled" disabled={true} style={{ marginBottom: 20 }} />


  render() {
    return (
      <ThemeProvider>
        <View style={styles.container}>

          <Icon name={this.state.icon} size={40} style={{marginBottom: 30, color: 'red'}}/>

          <RaisedButton label="Normal" style={{ marginBottom: 20 }} />
          <RaisedButton label="Primary" primary={true} style={{ marginBottom: 20 }} />
          <RaisedButton label="Secondary" secondary={true} style={{ marginBottom: 20 }} />
          <RaisedButton label="Disabled" disabled={true} style={{ marginBottom: 20 }} />


          <FlatButton label="Normal" style={{ marginBottom: 20 }} />
          <FlatButton label="Primary" primary={true} style={{ marginBottom: 20 }} />
          <FlatButton label="Secondary" secondary={true} style={{ marginBottom: 20 }} />
          <FlatButton label="Disabled" disabled={true} style={{ marginBottom: 20 }} />

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
