import React, { Component } from 'react';
import {
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './Touchable.styles';

export default class Touchable extends Component {

  static defaultProps = {
    onPress: () => { },
    onLongPress: null,
    onPressIn: () => { },
    onPressOut: () => { },
    overlayColor: 'rgba(0,0,0, 0.02)',
    rippleColor: 'rgba(0,0,0, 0.04)',
    style: {},
    containerStyle: {},
  }

  constructor(props) {
    super(props);

    this.state = {
      overlayOpacity: new Animated.Value(0),
      rippleScale: new Animated.Value(0),
      rippleOpacity: new Animated.Value(20),
      layout: { width: 0, height: 0 },
      touchPosition: {
        x: 0,
        y: 0
      },
    };
    this.rippleSize = 0;
    this.longPressTimeout = null;
    this.layoutChanged = false;
  }

  onLayout(event) {
    this.setState({
      layout: event.nativeEvent.layout
    });
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
      duration: 700
    }).start();
  }

  onTouchEnd() {
    Animated.timing(this.state.rippleScale, {
      toValue: this.rippleSize,
      duration: 400,
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
      borderRadius: 1000,
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

    //android hack
    let borderRadiusStyles = {};
    if (this.props.containerStyle.borderRadius) {
      borderRadiusStyles.borderRadius = this.props.containerStyle.borderRadius;
    }
    return (
      <View
        style={[styles.container, this.props.containerStyle]}
        onLayout={this.onLayout.bind(this)} >
          <TouchableWithoutFeedback
            onPress={this.props.onPress}
            onLongPress={this.props.onLongPress}
            onPressIn={(evt) => {
              let touchPositionRelative = {
                x: evt.nativeEvent.locationX,
                y: evt.nativeEvent.locationY,
              }
              this.onTouchStart(touchPositionRelative);
              this.props.onPressIn();
            } }
            onPressOut={(evt) => {
              this.onTouchEnd();
              this.props.onPressOut();
            } } >
            <View style={this.props.style}>
              {this.props.children}
            </View>
          </TouchableWithoutFeedback>
          <Animated.View style={[styles.overlay, overlayStyles, borderRadiusStyles]} pointerEvents="none"></Animated.View>
          <Animated.View style={[styles.ripple, rippleStyles]} pointerEvents="none"></Animated.View>
      </View>
    );
  }

}