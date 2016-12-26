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
  ScrollView,
  Image,
} from 'react-native';

import {
  ThemeProvider,
  FlatButton,
  RaisedButton,
  IconButton,
  Icon,
  Touchable,
  MaterialView,
  Paper,
} from 'react-native-material';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elevation: new Animated.Value(2)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.elevation, {
      toValue: 20,
      duration: 500
    }).start();

  }



  // <FlatButton label="Normal" style={{ marginBottom: 20 }} onPress={() => {
  //   console.log('onPress');
  // } } />
  // <FlatButton label="Primary" primary={true} style={{ marginBottom: 20 }} />
  // <FlatButton label="Secondary" secondary={true} style={{ marginBottom: 20 }} />
  // <FlatButton label="Disabled" disabled={true} style={{ marginBottom: 20 }} />


  // <IconButton icon={"hourglass-empty"} style={{marginBottom: 30, width: 200,}} />

  // <RaisedButton label="Normal" style={{ marginBottom: 20, width: 200, height: 100 }} />
  // <RaisedButton label="Primary" primary={true} style={{ marginBottom: 20 }} />
  // <RaisedButton label="Secondary" secondary={true} style={{ marginBottom: 20 }} />
  // <RaisedButton label="Disabled" disabled={true} style={{ marginBottom: 20 }} />


  // <FlatButton label="Normal" style={{ marginBottom: 20 }} />
  // <FlatButton label="Primary" primary={true} style={{ marginBottom: 20 }} />
  // <FlatButton label="Secondary" secondary={true} style={{ marginBottom: 20 }} />
  // <FlatButton label="Disabled" disabled={true} style={{ marginBottom: 20 }} />

  render() {
    return (
      <ThemeProvider>
        <View style={styles.container}>

          <Paper elevation={5} style={{ backgroundColor: '#fff', padding: 50, borderRadius: 20, }}>
            <Text>Hello</Text>
            <Touchable borderRadiusMask={20}></Touchable>
          </Paper>

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
