import { StyleSheet, Dimensions, Platform } from 'react-native';
import deepAssign from 'deep-assign';
import Color from 'color';

export default {

  container: {
    // overflow: 'hidden',
    borderRadius: 2,
  },

  inner: {
    borderRadius: 2,
    overflow: 'hidden',
  },
  
  rippleColor: (props) => {
    let color = props.labelStyle && props.labelStyle.color ?  props.labelStyle.color : '#000000';
    return Color(color).fade(0.9).rgb().toString();
  },

  overlayColor: (props) => {
    let color = props.labelStyle && props.labelStyle.color ?  props.labelStyle.color : '#000000';
    return Color(color).fade(0.95).rgb().toString();
  },

};