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
  LayoutAnimation,
  UIManager,
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
      elevation: 7,
      style: {
        position: 'absolute',
        bottom: 150,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
      }
    };
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


  // <FloatingActionButton icon="add" />


  componentDidMount() {
    // UIManager.setLayoutAnimationEnabledExperimental &&
    //   UIManager.setLayoutAnimationEnabledExperimental(true);
    // setTimeout(() => {
    //   var CustomLayoutSpring = {
    //     duration: 200,
    //     create: {
    //       type: LayoutAnimation.Types.linear,
    //       property: LayoutAnimation.Properties.scaleXY,
    //     },
    //     update: {
    //       type: LayoutAnimation.Types.linear,
    //     },
    //   };
    //   LayoutAnimation.configureNext(CustomLayoutSpring);
    //   this.setState({
    //     style: {
    //       position: 'absolute',
    //       bottom: 0,
    //       right: 0,
    //       left: 0,
    //       height: 50,
    //       borderRadius: 0,
    //     },
    //     elevation: 0,
    //   });
    // }, 1000);
  }


  render() {

    let colorStyles = {
      backgroundColor: 'red'
    };

    return (
      <ThemeProvider>
        <View style={styles.container}>

          <RaisedButton label="Normal" style={{ marginBottom: 10 }} />
          <RaisedButton label="Primary" primary={true} style={{ marginBottom: 10 }} />
          <RaisedButton label="Secondary" secondary={true} style={{ marginBottom: 10 }} />
          <RaisedButton label="Disabled" disabled={true} style={{ marginBottom: 20 }} />
          <FlatButton label="Normal" style={{ marginBottom: 10 }} />
          <FlatButton label="Primary" primary={true} style={{ marginBottom: 10 }} />

          <FlatButton label="Secondary" secondary={true} style={{ marginBottom: 10 }} />
          <FlatButton label="Disabled" disabled={true} style={{ marginBottom: 20 }} />

          <IconButton icon="favorite" style={{ marginBottom: 20 }} />
          
          <FloatingActionButton icon="add" />

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
