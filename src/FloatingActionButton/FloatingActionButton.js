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
    let transformDuration = 150;
    var CustomLayoutSpring = {
      duration: transformDuration,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        type: LayoutAnimation.Types.linear,
      },
    };
    LayoutAnimation.configureNext(CustomLayoutSpring);
    Animated.timing(this.state.transformAnimation, {
      toValue: 100,
      duration: transformDuration,
    }).start();

    this.state.elevation.setValue(0);

    this.setState({
      expanded: true
    });
  }

  getContainerStyles(styles) {
    if (!this.state.expanded) {
      return [styles.sheet.container, this.getAppearAnimationStyles()];
    }
    else {
      return [styles.sheet.containerToolbar, {
        borderRadius: this.state.transformAnimation.interpolate({
          inputRange: [0, 90],
          outputRange: [26, 0]
        })
      }];
    }
  }

  getContent(styles) {
    if (this.state.expanded) {
      return (
        <Animated.View style={{
          flexDirection: 'row',
          opacity: this.state.transformAnimation.interpolate({
            inputRange: [93, 100],
            outputRange: [0, 1]
          })
        }}>
          <IconButton icon="alarm-add" style={{ marginRight: 10 }} />
          <IconButton icon="alarm-on" style={{ marginRight: 10 }} />
          <IconButton icon="close" style={{ marginRight: 10 }} onPress={() => {
            let transformDuration = 150;
            var CustomLayoutSpring = {
              duration: transformDuration,
              create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.scaleXY,
              },
              update: {
                type: LayoutAnimation.Types.linear,
              },
            };
            LayoutAnimation.configureNext(CustomLayoutSpring);
            Animated.timing(this.state.transformAnimation, {
              toValue: 0,
              duration: transformDuration,
            }).start();
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
      <Paper style={this.getContainerStyles(computedStyles)} elevation={this.state.expanded ? 0 : this.state.elevation}>
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 56,
          height: 56,
          borderRadius: 500,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          opacity: this.state.transformAnimation.interpolate({
            inputRange: [0, 50],
            outputRange: [1, 0]
          })
        }}>
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
        {this.getContent(computedStyles)}
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