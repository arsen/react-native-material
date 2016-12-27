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

  render() {
    return (
      <ThemeProvider>
        <View style={styles.container}>
          <IconButton icon="language" style={{ marginBottom: 20, color: 'red', fontSize: 65 }} />
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
