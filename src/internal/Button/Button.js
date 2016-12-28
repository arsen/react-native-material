import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Touchable from '../Touchable';
import Paper from '../Paper';
import Icon from '../../Icon';

import styles from './Button.styles';


export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onOnPressIn: PropTypes.func,
    onOnPressOut: PropTypes.func,
    onRippleDone: PropTypes.func,
    style: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    disabled: PropTypes.bool,
    ripple: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.bool
    ]),
    overlayColor: PropTypes.string,
    rippleColor: PropTypes.string,
    onLayout: PropTypes.func,
  }

  render() {
    const props = this.props;
    let elevation = props.elevation && !props.disabled ? props.elevation : 0;
    let Touch = props.disabled ? View : Touchable;
    let Container = elevation ? Paper : View;

    let flattenStyles = Array.isArray(props.style) ? StyleSheet.flatten(props.style) : props.style;
    return (
      <Container style={props.style} elevation={elevation} onLayout={props.onLayout}>
        {props.children}
        <Touch
          borderRadiusMask={flattenStyles && flattenStyles.borderRadius ?  flattenStyles.borderRadius : 0}
          onPressIn={props.onPressIn}
          onPressOut={props.onPressOut}
          onPress={props.onPress}
          onLongPress={props.onLongPress}
          ripple={props.ripple} 
          rippleColor={props.rippleColor}
          onRippleDone={props.onRippleDone}
          overlayColor={props.overlayColor}>
          </Touch>
      </Container>
    );
  }
}