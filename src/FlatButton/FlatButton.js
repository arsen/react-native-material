import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Touchable from '../Touchable';

import styles from './FlatButton.styles';

export default class FlatButton extends Component {
  constructor(props) {
    super(props);
  }
  static contextTypes = {
    theme: PropTypes.object.isRequired,
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    style: PropTypes.object,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    onPress: () => { },
    onLongPress: () => {},
    style: {},
    primary: false,
    secondary: false,
    disabled: false,
  }

  render() {
    const theme = this.context.theme;
    const props = this.props;
    const Wrapper = props.disabled ? View : Touchable;
    return (
      <View style={styles.default(theme, props)}>
        <Wrapper
          onPress={props.onPress}
          onLongPress={props.onLongPress}
          style={[styles.rippleStyles()]}
          overlayColor={styles.rippleOverlayColor(theme, props)}
          rippleColor={styles.rippleColor(theme, props)} >
          <Text style={styles.label(theme, props)}>
            {props.label}
          </Text>
        </Wrapper>
      </View>
    );
  }
}