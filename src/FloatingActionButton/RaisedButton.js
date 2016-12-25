import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';

import Button from '../internal/Button';

import styles from './RaisedButton.styles';

/**
 * FlatButton Component.
 */
export default class RaisedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elevation: new Animated.Value(2),
    }
  }

  static contextTypes = {
    theme: PropTypes.object.isRequired,
  }

  static propTypes = {
    /**
     * Label for the button.
     */
    label: PropTypes.string.isRequired,

    /**
     * Callback function when button is pressed.
     */
    onPress: PropTypes.func,

    /**
     * Callback function when button is long pressed.
     */
    onLongPress: PropTypes.func,

    /**
     * Override button container styles.
     */
    style: PropTypes.object,

    /**
     * If true, colors button according to primary color from the Theme
     */
    primary: PropTypes.bool,

    /**
     * If true, colors button according to secondary color from the Theme
     */
    secondary: PropTypes.bool,

    /**
     * 	Disables the button if set to true.
     */
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    onPress: () => { },
    onLongPress: null,
    style: {},
    labelStyle: {},
    primary: false,
    secondary: false,
    disabled: false,
  }

  onPressIn() {
    console.log('press in');
    Animated.timing(this.state.elevation, {
      toValue: 4,
      duration: 200
    }).start();

  }

  onPressOut() {
    console.log('press out');
    Animated.timing(this.state.elevation, {
      toValue: 2,
      duration: 200
    }).start();
  }

  render() {
    const theme = this.context.theme.RaisedButton;
    const props = this.props;
    return (
      <Button 
        label={props.label}
        style={[styles.container(theme, props), props.style]}
        innerStyle={styles.innerStyle()}
        labelStyle={styles.labelStyle(theme, props)}
        disabled={props.disabled}
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        elevation={this.state.elevation}
      />
    );
  }
}