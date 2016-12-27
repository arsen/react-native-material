import React, { Component } from 'react';
import {
  View,
  Animated,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Color from 'color';

import styles from './Touchable.styles';

export default class Touchable extends Component {

  static defaultProps = {
    onPress: () => { },
    onLongPress: null,
    onPressIn: () => { },
    onPressOut: () => { },
    ripple: 'tap',
    rippleColor: 'rgba(0,0,0, 0.04)',
    borderRadiusMask: 0,
  }

  constructor(props) {
    super(props);

    this.state = {
      overlayOpacity: new Animated.Value(0),
      rippleScale: new Animated.Value(0),
      rippleOpacity: new Animated.Value(0),
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
    console.log('onLayout', event.nativeEvent);
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

    if (this.props.ripple === 'tap') {
      this.rippleSize = parseInt(
        2 * Math.sqrt(Math.pow(this.state.layout.width, 2) +
          Math.pow(this.state.layout.height, 2))
      );
    }
    else if (this.props.ripple === 'center') {
      this.rippleSize = Math.min(this.state.layout.width, this.state.layout.height)
    }

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

    let hideDelay = this.props.ripple === 'tap' ? 100 : 250;
    Animated.sequence([
      Animated.delay(hideDelay),
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

  getOverlayColor() {
    return this.props.overlayColor ?
      this.props.overlayColor :
      Color(this.props.rippleColor).fade(0.5).rgb().toString()
  }

  render() {

    let overlayStyles = {
      opacity: this.state.overlayOpacity,
      backgroundColor: this.getOverlayColor(),
    };
    if (this.props.ripple === 'center') {
      overlayStyles.opacity = 0;
    }

    let rippleStyles = {
      opacity: this.state.rippleOpacity,
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
    };

    if (this.props.ripple === 'tap') {
      rippleStyles.top = this.state.touchPosition.y;
      rippleStyles.left = this.state.touchPosition.x;

    }
    else {
      rippleStyles.top = this.state.layout.height / 2;
      rippleStyles.left = this.state.layout.width / 2;
    }

    //android hack
    let borderRadiusStyles = {
      borderRadius: this.props.borderRadiusMask
    };
    return (
      <View
        style={[styles.container, styles.fullSize, borderRadiusStyles]}
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
          <View style={styles.fullSize}>
            <Animated.View style={[styles.overlay, overlayStyles, borderRadiusStyles]} pointerEvents="none"></Animated.View>
            {this.props.ripple ? <Animated.View style={[styles.ripple, rippleStyles]} pointerEvents="none"></Animated.View> : false}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

}