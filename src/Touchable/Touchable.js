import React, { Component } from 'react';
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  PanResponder
} from 'react-native';

import styles from './Touchable.styles';

export default class Touchable extends Component {

  static defaultProps = {
    overlayColor: 'rgba(0,0,0, 0.02)',
    rippleColor: 'rgba(0,0,0, 0.04)',
  }

  constructor(props) {
    super(props);

    this.state = {
      overlayOpacity: new Animated.Value(0),
      rippleScale: new Animated.Value(1),
      rippleOpacity: new Animated.Value(1),
      layout: { width: 0, height: 0 },
      touchPosition: {
        x: 0,
        y: 0
      },
    };
    this._panResponder = {};
    this._panResponderDisabled = {};
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
      // onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        let touchPositionRelative = {
          x: gestureState.x0 - this.state.layout.x,
          y: gestureState.y0 - this.state.layout.y
        }
        this.onTouchStart(touchPositionRelative);

      },
      onPanResponderRelease: (evt, gestureState) => {
        this.onTouchEnd();
      },
      onPanResponderTerminate: (evt, gestureState) => {
        this.onTouchEnd();
      },
    });
  }

  onLayout(event) {
    this.setState({ layout: event.nativeEvent.layout });
  }


  onTouchStart(pos) {
    this.state.rippleScale.setValue(1);
    this.state.rippleOpacity.setValue(1);
    this.setState({
      touchPosition: pos
    });

    Animated.timing(this.state.overlayOpacity, {
      toValue: 1,
      duration: 500
    }).start();


    let maxSize = Math.max(this.state.layout.width, this.state.layout.height) * 2;
    let maxScale = Math.round(maxSize / 2);

    Animated.timing(this.state.rippleScale, {
      toValue: maxScale,
      duration: 2000
    }).start();
  }

  onTouchEnd() {
    let maxSize = Math.max(this.state.layout.width, this.state.layout.height) * 2;
    let maxScale = Math.round(maxSize / 2);

    Animated.timing(this.state.rippleScale, {
      toValue: maxScale,
    }).start();

    Animated.sequence([
      Animated.delay(100),
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
      transform: [
        { scale: this.state.rippleScale },
      ],
      backgroundColor: this.props.rippleColor
    }

    return (
      <View
        style={[styles.container, this.props.style]}
        onLayout={this.onLayout.bind(this)}
        {...this._panResponder.panHandlers} >
        {this.props.children}
        <Animated.View style={[styles.overlay, overlayStyles]}></Animated.View>
        <Animated.View style={[styles.ripple, rippleStyles]}></Animated.View>
      </View>
    );
  }

}