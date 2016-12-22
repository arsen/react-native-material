import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

// import Ripple from '../Ripple';

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
    console.log('context', this.context.theme);
    return (
      <TouchableWithoutFeedback onPressIn={(data)=> {
        console.log('pressing', data.nativeEvent);
      }}>
        <View style={styles.default(this.context.theme, this.props)}>
          <Text style={styles.label(this.context.theme, this.props)}>
            {this.props.label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}