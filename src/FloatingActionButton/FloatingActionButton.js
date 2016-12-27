import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
} from 'react-native';

import Button from '../internal/Button';
import Icon from '../Icon';

import buttonStyles from './FloatingActionButton.styles';

/**
 * FlatingActionButton Component.
 */
export default class FlatingActionButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elevation: new Animated.Value(2),
      scale: new Animated.Value(0),
    }
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
     * Override background color.
     */
    color: PropTypes.string,

    /**
     * Override icon color.
     */
    iconColor: PropTypes.string,

    /**
     * Position of the button (if passed the position will set to 'absolute')
     */
    pos: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
      bottom: PropTypes.number,
      right: PropTypes.number,
    }),

    /**
     * Make it a Mini button
     */
    mini: PropTypes.bool,

    /**
     * If set true, button will animate (scale) on mount. It will also animate when position is changed.
     */
    animate: PropTypes.bool,
  }

  static defaultProps = {
    onPress: () => { },
    onLongPress: null,
    disabled: false
  }


  onPressIn() {
    Animated.timing(this.state.elevation, {
      toValue: 5,
      duration: 200
    }).start();
  }

  onPressOut() {
    Animated.timing(this.state.elevation, {
      toValue: 2,
      duration: 200
    }).start();
  }

  componentDidMount() {
    Animated.timing(this.state.scale, {
      toValue: 1,
      duration: 200,
      easing: Easing.cubic,
    }).start();
  }

  getAnimateStyles() {
    let animateStyles = {};
    if (this.props.animate) {
      animateStyles.transform = [
        { scale: this.state.scale }
      ];
    }
    return animateStyles;
  }

  render() {
    const theme = this.context.theme.FloatingActionButton;
    const props = this.props;
    let styles = buttonStyles(theme, props);

    let animateStyles = this.getAnimateStyles();

    return (
      <Button
        style={[styles.sheet.container, animateStyles]}
        ripple="center"
        rippleColor={styles.ripple}
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        onPressIn={this.onPressIn.bind(this)}
        onPressOut={this.onPressOut.bind(this)}
        elevation={this.state.elevation}>
        <Icon name={this.props.icon} style={styles.sheet.icon} />
      </Button>
    );
  }
}