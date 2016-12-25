import React, { Component, PropTypes } from 'react';
import {
  View,
  Animated,
} from 'react-native';

import styles from './Paper.styles';


export default class Paper extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    style: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    onLayout: React.PropTypes.func
  }

  static defaultProps = {
    style: {}
  }

  render() {
    return (
      <Animated.View style={[styles(this.props), this.props.style]} onLayout={this.props.onLayout}>
        {this.props.children}
      </Animated.View>
    );
  }
}