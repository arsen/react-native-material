import React, { Component } from 'react';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
  View,
} from 'react-native';


export default class Ripple extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (Platform.OS === 'ios') {
      return (
        <TouchableHighlight
          onPress={this.props.onPress}
          underlayColor="rgba(0,0,0, 0.2)"
          style={{ borderRadius: 2 }}
          >
          <View>
            {this.props.children}
          </View>
        </TouchableHighlight>
      );
    }
    else {
      return (
        <TouchableNativeFeedback
          style={{
            borderRadius: 2
          }}
          onPress={this.props.onPress}
          >
          <View>
            {this.props.children}
          </View>
        </TouchableNativeFeedback>
      );
    }
  }
}

Ripple.defaultProps = {
  onPress: () => { }
};