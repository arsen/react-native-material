import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  LayoutAnimation,
  UIManager,
  StyleSheet
} from 'react-native';

import Button from '../internal/Button';
import Paper from '../internal/Paper';
import Touchable from '../internal/Touchable';
import Icon from '../Icon';
import FlatButton from '../FlatButton';
import IconButton from '../IconButton';

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
      transformAnimation: new Animated.Value(0),
      expanded: false,
    }

    this.layout = null;
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
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
    position: PropTypes.shape({
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
    if (!this.state.expanded) {
      Animated.timing(this.state.elevation, {
        toValue: 5,
        duration: 200
      }).start();
    }
  }

  onPressOut() {
    if (!this.state.expanded) {
      Animated.timing(this.state.elevation, {
        toValue: 3,
        duration: 200
      }).start();
    }
  }

  componentDidMount() {
    Animated.timing(this.state.scale, {
      toValue: 1,
      duration: 200,
      easing: Easing.cubic,
    }).start();
  }

  componentWillUpdate(newProps, newState) {
    let duration = 3000;
    let toValue = newState.expanded ? 100 : 0;

    let customAnim = LayoutAnimation.create(duration,
      LayoutAnimation.Types.easeInEaseOut,
      LayoutAnimation.Properties.opacity);



    LayoutAnimation.configureNext(customAnim);
    // LayoutAnimation.easeInEaseOut();
    Animated.timing(this.state.transformAnimation, {
      toValue,
      duration
    }).start();
  }

  getAppearAnimationStyles() {
    let animateStyles = {};
    if (this.props.animate) {
      animateStyles.transform = [
        { scale: this.state.scale }
      ];
    }
    return animateStyles;
  }

  onPress() {
    if (!this.props.toolbar) {
      this.props.onPress();
    }
    else {
      this.transform();
    }
  }

  transform() {
    if (!this.props.toolbar) {
      return;
    }
    this.setState({
      expanded: true
    });
  }

  getContainerStyles(styles) {
    let result = [];
    if (!this.state.expanded) {
      result = [styles.sheet.container, this.getAppearAnimationStyles()];
    }
    else {
      result = [styles.sheet.containerToolbar];
    }

    result.push({
      borderRadius: this.state.transformAnimation.interpolate({
        inputRange: [40, 90],
        outputRange: [styles.borderRadius, 0]
      })
    });
    return result;
  }

  getContent(styles) {
    if (this.props.toolbar) {
      return (
        <Animated.View pointerEvents="box-none" style={[styles.sheet.contentToolbar, {
          transform: [
            {
              scale: this.state.transformAnimation.interpolate({
                inputRange: [30, 100],
                outputRange: [0, 1]
              })
            }
          ],
          opacity: this.state.transformAnimation.interpolate({
            inputRange: [30, 100],
            outputRange: [0, 1]
          })
        }]}>
          <IconButton icon="update" style={{ marginRight: 10 }} />
          <IconButton icon="event" style={{ marginRight: 10 }} />
          <IconButton icon="alarm-add" style={{ marginRight: 10 }} />
          <IconButton icon="alarm-on" style={{ marginRight: 10 }} />
          <IconButton icon="close" style={{ marginRight: 10 }} onPress={() => {
            this.setState({
              expanded: false
            });
          } } />
        </Animated.View>
      )
    }
  }

  render() {
    const theme = this.context.theme.FloatingActionButton;
    const props = this.props;
    let computedStyles = buttonStyles(theme, props);

    // 
    return (
      <Paper
        style={this.getContainerStyles(computedStyles)}
        elevation={this.state.expanded ? 0 : this.state.elevation} >
        {this.getContent(computedStyles)}
        <Animated.View
          style={[computedStyles.sheet.mainButton, {
            opacity: this.state.transformAnimation.interpolate({
              inputRange: [0, 50],
              outputRange: [1, 0]
            })
          },]} >
          <Icon name={this.props.icon} style={computedStyles.sheet.icon} />
          <Touchable
            borderRadiusMask={500}
            onPressIn={this.onPressIn.bind(this)}
            onPressOut={this.onPressOut.bind(this)}
            onPress={this.onPress.bind(this)}
            onLongPress={props.onLongPress}
            ripple="center"
            rippleColor={computedStyles.ripple}
            >
          </Touchable>
        </Animated.View>
      </Paper>
    );
    // onRippleDone={this.transform.bind(this)}

    // return (
    //   <Button
    //     style={[styles.sheet.container, extraStyles]}
    //     ripple="center"
    //     rippleColor={styles.ripple}
    //     onPress={this.onPress.bind(this)}
    //     onLongPress={props.onLongPress}
    //     onPressIn={this.onPressIn.bind(this)}
    //     onPressOut={this.onPressOut.bind(this)}
    //     onRippleDone={() => {
    //       if (this.props.toolbar) {
    //         this.transformToToolbar();
    //       }
    //     } }
    //     elevation={this.state.elevation}>
    //     
    //   </Button>
    // );

  }
}