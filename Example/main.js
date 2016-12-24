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

import {
  ThemeProvider,
  FlatButton,
  RaisedButton,
  Touchable,
  Paper,
} from 'react-native-material';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elevation: 2,
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     elevation: this.state.elevation+1
    //   });
    // }, 1000);
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

          // <RaisedButton label="Primary" primary={true} style={{ marginBottom: 20 }} />
          // <RaisedButton label="Secondary" secondary={true} style={{ marginBottom: 20 }} />
          // <RaisedButton label="Disabled" disabled={true} style={{ marginBottom: 20 }} />
          
  render() {
    return (
      <ThemeProvider>
        <View style={styles.container}>
          <RaisedButton label="Normal"/>

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
