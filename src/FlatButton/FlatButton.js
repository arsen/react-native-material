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

  static defaultProps = {
    onPress: () => { },
    label: "",
  }

  render() {
    const theme = this.context.theme;
    const props = this.props;
    return (
      <View style={styles.default(theme, props)}>
        <Touchable
          style={[styles.rippleStyles()]}
          overlayColor={styles.rippleOverlayColor(theme, props)}
          rippleColor={styles.rippleColor(theme, props)} >
          <Text style={styles.label(theme, props)}>
            {props.label}
          </Text>
        </Touchable>
      </View>
    );
  }
}