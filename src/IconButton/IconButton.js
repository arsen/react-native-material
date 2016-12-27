import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';

import Button from '../internal/Button';
import Icon from '../Icon';

import iconButtonStyles from './IconButton.styles';

/**
 * RaisedButton Component.
 */
export default class RaisedButton extends Component {
  constructor(props) {
    super(props);
  }

  static contextTypes = {
    theme: PropTypes.object.isRequired,
  }

  static propTypes = {
    /**
     * Icon name for the button.
     */
    icon: PropTypes.string.isRequired,

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
     * 	Disables the button if set to true.
     */
    disabled: PropTypes.bool,

  }

  static defaultProps = {
    onPress: () => { },
    onLongPress: null,
    style: {},
    disabled: false
  }


  render() {
    const theme = this.context.theme.RaisedButton;
    const props = this.props;
    let styles = iconButtonStyles(theme, props);
    return (
      <Button
        style={[styles.sheet.container, props.style]}
        ripple={'center'}
        rippleColor={styles.ripple}
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        disabled={props.disabled} >
        <Icon name={this.props.icon} style={styles.sheet.icon} />
      </Button>
    );
  }
}