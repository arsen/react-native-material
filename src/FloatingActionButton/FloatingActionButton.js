import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  LayoutAnimation
} from 'react-native';

import Button from '../internal/Button';
import Paper from '../internal/Paper';
import Icon from '../Icon';

import buttonStyles from './FloatingActionButton.styles';

/**
 * FlatingActionButton Component.
 */
export default class FlatingActionButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elevation: new Animated.Value(3),
      scale: new Animated.Value(0),
      toolbarAnimation: new Animated.Value(0),
      toolbarVisible: false,
    }

    this.toolbarAnimationStyles = {};
    this.layout = null;
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

    /**
     * If set button will transform to toolbar after press.
     */
    toolbar: PropTypes.array,
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
      toValue: 3,
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

  getSize() {
    if (this.props.mini) {
      return {
        width: 40,
        height: 40,
      }
    }
    else {
      return {
        width: 56,
        height: 56,
      }
    }
  }

  getExtraStyles() {
    let extraStyles = {};
    if (this.props.animate) {
      extraStyles.transform = [
        { scale: this.state.scale }
      ];
    }

    if (this.props.pos) {
      extraStyles.position = 'absolute';
      extraStyles = Object.assign(extraStyles, this.props.pos);
    }

    extraStyles = Object.assign(extraStyles, this.getSize());

    return extraStyles;
  }

  measureSize(event) {
    // console.log('layout measure', event.nativeEvent.layout);
  }

  componentWillUpdate() {

  }

  transformToToolbar() {
    let currLayout = Object.assign({}, this.layout);
    // this.toolbarAnimationStyles = {
    //   position: 'absolute',
    //   left: this.state.toolbarAnimation.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: [currLayout.x, 0]
    //   }),
    //   bottom: this.state.toolbarAnimation.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: [20, 0]
    //   }),
    //   right: this.state.toolbarAnimation.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: [20, 0]
    //   }),
    //   borderRadius: this.state.toolbarAnimation.interpolate({
    //     inputRange: [0, 100],
    //     outputRange: [500, 0],
    //   }),
    //   height: this.getSize().height,
    // }

    this.toolbarAnimationStyles = {};


    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      this.toolbarAnimationStyles = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }
      this.forceUpdate();
    }, 2000)


    //   let anim = {
    //   duration: 1000,
    //   create: {
    //     type: LayoutAnimation.Types.spring,
    //     property: LayoutAnimation.Properties.scaleXY,
    //     springDamping: 0.7,
    //   },
    //   update: {
    //     type: LayoutAnimation.Types.spring,
    //     springDamping: 0.7,
    //   },
    // };
    //    LayoutAnimation.configureNext(anim);

    this.setState({
      toolbarVisible: true
    });

    Animated.timing(this.state.toolbarAnimation, {
      toValue: 100,
      duration: 200
    }).start();
  }

  onPress() {
    if (!this.props.toolbar) {
      this.props.onPress();
    }
  }

  render() {
    const theme = this.context.theme.FloatingActionButton;
    const props = this.props;
    let styles = buttonStyles(theme, props);

    let extraStyles = this.getExtraStyles();

    if (!this.state.toolbarVisible) {
      return (
        <Button
          onLayout={(event) => {
            this.layout = event.nativeEvent.layout;
          } }
          style={[styles.sheet.container, extraStyles]}
          ripple="center"
          rippleColor={styles.ripple}
          onPress={this.onPress.bind(this)}
          onLongPress={props.onLongPress}
          onPressIn={this.onPressIn.bind(this)}
          onPressOut={this.onPressOut.bind(this)}
          onRippleDone={() => {
            if (this.props.toolbar) {
              this.transformToToolbar();
            }
          } }
          elevation={this.state.elevation}>
          <Icon name={this.props.icon} style={styles.sheet.icon} />
        </Button>
      );
    }
    if (this.state.toolbarVisible) {
      return (
        <Paper
          elevation={this.state.elevation}
          style={[styles.sheet.container, this.toolbarAnimationStyles]}
          >
          <Icon name={this.props.icon} style={styles.sheet.icon} />
        </Paper>);
    }
  }
}