import React, { Component, PropTypes } from 'react';
import {
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
  }

  render() {
    const props = this.props;
    let elevation = props.elevation && !props.disabled ? props.elevation : 0;
    let Touch = props.disabled ? null : Touchable;
    let Container = elevation ? Paper : View;

    return (
      <Container style={props.style} elevation={elevation}>
        {props.children}
        <Touch
          borderRadiusMask={props.style.borderRadius || 0}
          onPressIn={props.onPressIn}
          onPressOut={props.onPressOut}
          onPress={props.onPress}
          onLongPress={props.onLongPress}
          ripple={props.ripple} 
          rippleColor={props.rippleColor}
          overlayColor={props.overlayColor}>
          </Touch>
      </Container>
    );
  }
}