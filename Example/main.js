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
  Button,
  FlatButton,
  RaisedButton,
  IconButton,
  FloatingActionButton,
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
      pos: {
        top: 40,
        left: 20
      }
    };
  }

  componentDidMount() {
  }


  //   <Button style={{
  //   padding: 10,
  //   borderRadius: 2
  // }}
  //   rippleColor='rgba(33, 150, 243, 0.2)'
  //   overlayColor='rgba(33, 150, 243, 0.1)'
  //   >
  //   <Text>Hello</Text>
  // </Button>

  // <Button style={{
  //   padding: 10,
  //   borderRadius: 2,
  // }}
  //   ripple="center"
  //   rippleColor='rgba(33, 150, 243, 0.2)'
  //   overlayColor='rgba(33, 150, 243, 0.1)'
  //   >
  //   <Icon name="check-circle" size={20} style={{ color: "#2196F3" }} />
  // </Button>

  // <FlatButton label="Normal" style={{ marginBottom: 20 }} />
  // <FlatButton label="Primary" primary={true} style={{ marginBottom: 20 }}  />
  // <FlatButton label="ICON" primary={true}  iconRight="volume-up" style={{ marginBottom: 20 }} />
  // <FlatButton label="Secondary" secondary={true} style={{ marginBottom: 20 }} />
  // <FlatButton label="Disabled" disabled={true} style={{ marginBottom: 20 }} />

  // <RaisedButton label="Normal" style={{ marginBottom: 20 }} />
  // <RaisedButton label="Primary" primary={true} style={{ marginBottom: 20, position: 'absolute', top: 40, left: 20 }}  />
  // <RaisedButton label="ICON" primary={true}  iconRight="volume-up" style={{ marginBottom: 20 }} />
  // <RaisedButton label="Secondary" secondary={true} style={{ marginBottom: 20 }} />
  // <RaisedButton label="Disabled" disabled={true} style={{ marginBottom: 20 }} />

  // <FloatingActionButton icon="add" />


  render() {


    return (
      <ThemeProvider>
        <View style={styles.container}>
          <FloatingActionButton icon="add" animate={true} pos={{
            right: 40,
            bottom: 40
          }} />
          <FloatingActionButton icon="add" mini={true} animate={true} />
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
    flexDirection: 'column',
  }
});
