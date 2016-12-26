import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Touchable from '../Touchable';
import Paper from '../Paper';
import Icon from '../../Icon';

import styles from './Button.styles';


export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onOnPressIn: PropTypes.func,
    onOnPressOut: PropTypes.func,
    style: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    innerStyle: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    labelStyle: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ]),
    disabled: PropTypes.bool,
    ripple: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.bool
    ]),
    overlayColor: PropTypes.string,
    rippleColor: PropTypes.string,
  }

  onLayout(evt) {
    // console.log('evt.nativeEvent1', evt.nativeEvent);
  }

  componentWillReceiveProps(newProps) {
    console.log('prop update', newProps.elevation);
  }

  getContent() {
    if (this.props.label && this.props.label !== '') {
      return (
        <Text style={this.props.labelStyle} pointerEvents="none">
          {this.props.label}
        </Text>
      )
    }
    if (this.props.icon && this.props.icon !== '') {
      let iconSize = this.props.labelStyle.fontSize
      return <Icon name={this.props.icon} size={this.props.iconSize} style={this.props.labelStyle} />;
    }
  }

  render() {
    const theme = this.context.theme;
    const props = this.props;
    let elevation = props.elevation && !props.disabled ? props.elevation : 0;
    let TouchArea = props.disabled ? View : Touchable;
    let Container = elevation ? Paper : View;

    return (
      <Container style={[styles.container, props.containerStyle]} elevation={elevation} onLayout={this.onLayout.bind(this)}>
        <TouchArea
          onPressIn={props.onPressIn}
          onPressOut={props.onPressOut}
          onPress={props.onPress}
          onLongPress={props.onLongPress}
          containerStyle={props.touchContainerStyle}
          innerStyle={[styles.touchInner, props.touchInnerStyle]}
          ripple={props.ripple}
          overlayColor={styles.overlayColor(props)}
          rippleColor={styles.rippleColor(props)} >
          <View pointerEvents="none">
            {this.getContent()}
          </View>
        </TouchArea>
      </Container>
    );
  }
}