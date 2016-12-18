import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';


import Ripple from '../Ripple';

export default class FlatButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Ripple>
        <View style={{padding: 10}}>
          <Text>{this.props.label}</Text>
        </View>
      </Ripple>
    );
  }
}

FlatButton.defaultProps = {
  onPress: () => {},
  label: ""
};