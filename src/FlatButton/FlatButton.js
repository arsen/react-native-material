import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Button from '../internal/Button';

import styles from './FlatButton.styles';

/**
 * FlatButton Component.
 */
export default class FlatButton extends Component {
  constructor(props) {
    super(props);
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

  render() {
    const theme = this.context.theme.FlatButton;
    const props = this.props;
    return (
      <Button 
        label={props.label}
        style={styles.container(theme, props)}
        innerStyle={styles.innerStyle()}
        labelStyle={styles.labelStyle(theme, props)}
        disabled={props.disabled}
        onPress={props.onPress}
        onLongPress={props.onLongPress}
      />
    );
  }
}