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
} from 'react-native';

import { ThemeProvider, FlatButton, Touchable } from 'react-native-material';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(1)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.scale, {
      toValue: 200,
      duration: 2000
    }).start();
  }

  render() {
    return (
      <ThemeProvider>
        <View style={styles.container}>

          <View style={{borderWidth: 0, margin: 50, padding: 20, alignSelf: 'stretch'}}>
            <FlatButton label="Normal" style={{ marginBottom: 40 }} />
            <FlatButton label="Primary" primary={true} style={{ marginBottom: 40 }} />
            <FlatButton label="Secondary" secondary={true} style={{ marginBottom: 40 }} />
            <FlatButton label="Disabled" disabled={true} style={{ marginBottom: 40 }} />
          </View>


        </View>
      </ThemeProvider>
    );

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


    // <Animated.View style={{
    //   position: 'absolute',
    //   top: 100,
    //   left: 100,
    //   marginLeft: this.state.scale.interpolate({
    //     inputRange: [1, 200],
    //     outputRange: [0, -100]
    //   }),
    //   marginTop: this.state.scale.interpolate({
    //     inputRange: [1, 200],
    //     outputRange: [0, -100]
    //   }),
    //   width: this.state.scale,
    //   height: this.state.scale,
    //   borderRadius: 20000,
    //   backgroundColor: 'blue',
    //   // transform: [
    //   //   {
    //   //     scale: this.state.scale
    //   //   }
    //   // ]
    // }} />

    // if (Platform.OS === 'android') {
    //   return (
    //     <View style={styles.container}>
    //       <TouchableNativeFeedback>
    //         <View style={{ paddingTop: 30, paddingBottom: 30, paddingLeft: 60, paddingRight: 60 }}>
    //           <Text>Hello World</Text>
    //         </View>
    //       </TouchableNativeFeedback>

    //       <Touchable style={{ paddingTop: 30, paddingBottom: 30, paddingLeft: 60, paddingRight: 60 }}>
    //         <Text>Hello World</Text>
    //       </Touchable>
    //     </View>
    //   );

    // }

    // return (
    //   <ThemeProvider>
    //     <View style={styles.container}>

    //       <Touchable style={{ paddingTop: 30, paddingBottom: 30, paddingLeft: 60, paddingRight: 60 }}>
    //         <Text>Hello World</Text>
    //       </Touchable>

    //     </View>
    //   </ThemeProvider>
    // );
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
