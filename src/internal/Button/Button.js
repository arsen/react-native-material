import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Touchable from '../Touchable';
import Paper from '../Paper';

import styles from './Button.styles';


export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    style: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    innerStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    disabled: PropTypes.bool,
  }

  onLayout(evt) {
    console.log('evt.nativeEvent1', evt.nativeEvent);
  }

  render() {
    const theme = this.context.theme;
    const props = this.props;
    let elevation = props.elevation && !props.disabled ? props.elevation : 0;
    let Inner = props.disabled ? View : Touchable;
    let Container = elevation ? Paper : View;

    return (
      <Container style={[styles.container, props.style]} elevation={2} onLayout={this.onLayout.bind(this)}>
        <Inner
          onPress={props.onPress}
          onLongPress={props.onLongPress}
          style={[props.innerStyle]}
          containerStyle={styles.inner}
          overlayColor={styles.overlayColor(props)}
          rippleColor={styles.rippleColor(props)} >
          <View pointerEvents="none">
            <Text style={props.labelStyle} pointerEvents="none">
              {props.label}
            </Text>
          </View>
        </Inner>
      </Container>
    );
  }
}