import { StyleSheet, Dimensions, Platform } from 'react-native';
import deepAssign from 'deep-assign';
import Color from 'color';

export default {

  container: {
    // overflow: 'hidden',
    borderRadius: 20,
    // borderWidth: 2,
    // width: 138,
    // height: 75,
    // borderColor: '#fff',
  },

  inner: {
    // width: 118,
    // height: 55,
    // position: 'absolute',
    // top: 10,
    // left: 10,
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