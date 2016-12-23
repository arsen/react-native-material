import React, { Component } from 'react';
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  PanResponder,
  findNodeHandle,
  NativeModules,
} from 'react-native';

const UIManager = NativeModules.UIManager;

import styles from './Touchable.styles';

export default class Touchable extends Component {

  static defaultProps = {
    onPress: () => { },
    onLongPress: () => { },
    onPressIn: () => { },
    onPressOut: () => { },
    overlayColor: 'rgba(0,0,0, 0.02)',
    rippleColor: 'rgba(0,0,0, 0.04)',
    padding: {},
  }

  constructor(props) {
    super(props);

    this.state = {
      overlayOpacity: new Animated.Value(0),
      rippleScale: new Animated.Value(0),
      rippleOpacity: new Animated.Value(1),
      layout: { width: 0, height: 0 },
      touchPosition: {
        x: 0,
        y: 0
      },
    };
    this._panResponder = {};
    this._panResponderDisabled = {};
    this.rippleSize = 0;
    this.longPressTimeout = null;
    this.layoutChanged = false;
  }

  componentWillMount() {
    this._panResponderDisabled = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    });

    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        let touchPositionRelative = {
          x: gestureState.x0 - this.state.layout.pageX,
          y: gestureState.y0 - this.state.layout.pageY
        }
        this.onTouchStart(touchPositionRelative);
        this.props.onPressIn(evt, gestureState);

        this.longPressTimeout = setTimeout(() => {
          this.props.onLongPress();
        }, 700);
      },
      onPanResponderRelease: (evt, gestureState) => {
        clearTimeout(this.longPressTimeout);
        this.onTouchEnd();
        this.props.onPressOut(evt, gestureState);
        this.props.onPress();
      },
      onPanResponderTerminate: (evt, gestureState) => {
        clearTimeout(this.longPressTimeout);
        this.onTouchEnd();
        this.props.onPressOut(evt, gestureState);
      },
    });
  }

  onLayout(event) {
    this.layoutChanged = true;
    this.component && this.component.measure && this.component.measure((x, y, width, height, pageX, pageY) => {
      this.setState({
        layout: {
          x, y, width, height, pageX, pageY
        }
      });
    });
  }

  onRef(component) {
    this.component = component;
  }

  onTouchStart(pos) {
    this.state.rippleScale.setValue(0);
    this.state.rippleOpacity.setValue(1);
    this.setState({
      touchPosition: pos
    });

    Animated.timing(this.state.overlayOpacity, {
      toValue: 1,
      duration: 500
    }).start();



    this.rippleSize = parseInt(
      2 * Math.sqrt(Math.pow(this.state.layout.width, 2) +
        Math.pow(this.state.layout.height, 2))
    );

    Animated.timing(this.state.rippleScale, {
      toValue: this.rippleSize,
      duration: 1000
    }).start();
  }

  onTouchEnd() {
    Animated.timing(this.state.rippleScale, {
      toValue: this.rippleSize,
    }).start();

    Animated.sequence([
      Animated.delay(120),
      Animated.parallel([
        Animated.timing(this.state.overlayOpacity, {
          toValue: 0,
          duration: 200
        }),
        Animated.timing(this.state.rippleOpacity, {
          toValue: 0,
          duration: 200
        })
      ])
    ]).start();
  }


  render() {
    let overlayStyles = {
      opacity: this.state.overlayOpacity,
      backgroundColor: this.props.overlayColor,
    };

    let rippleStyles = {
      opacity: this.state.rippleOpacity,
      top: this.state.touchPosition.y,
      left: this.state.touchPosition.x,
      backgroundColor: this.props.rippleColor,
      borderRadius: 2000,
      width: this.state.rippleScale,
      height: this.state.rippleScale,
      marginLeft: this.state.rippleScale.interpolate({
        inputRange: [0, this.rippleSize],
        outputRange: [0, -1 * (this.rippleSize / 2)]
      }),
      marginTop: this.state.rippleScale.interpolate({
        inputRange: [0, this.rippleSize],
        outputRange: [0, -1 * (this.rippleSize / 2)]
      }),
    }

    return (
      <View
        ref={(component) => {
          this.onRef(component);
        } }
        style={[styles.container, this.props.style]}
        onLayout={this.onLayout.bind(this)}
        {...this._panResponder.panHandlers} >
        <View {...this._panResponderDisabled.panHandlers}>
          {this.props.children}
        </View>
        <Animated.View style={[styles.overlay, overlayStyles]}></Animated.View>
        <Animated.View style={[styles.ripple, rippleStyles]}></Animated.View>
      </View>
    );
  }

}