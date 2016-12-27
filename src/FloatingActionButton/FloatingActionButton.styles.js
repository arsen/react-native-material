import { StyleSheet, Dimensions, Platform } from 'react-native';
import deepAssign from 'deep-assign';
import Color from 'color';


import { getStateStyles } from '../styles/helper';



export default (theme, props) => {

  let {backgroundColor, rippleColor, iconColor} = theme;
  let width = 56;
  let height = 56;
  let iconSize = 20;

  if (props.color) {
    backgroundColor = props.color;
  }
  
  if (props.iconColor) {
    iconColor = props.iconColor;
    rippleColor = Color(props.iconColor).fade(0.95).rgb().toString();
  }

  if (props.mini) {
    width = 40;
    height = 40;
    iconSize = 14;
  }

  let posStyles = {};
  if (props.pos) {
    posStyles.position = 'absolute';
    posStyles = Object.assign(posStyles, props.pos);
  }

  return {
    ripple: rippleColor,
    sheet: StyleSheet.create({
      container: deepAssign({
        borderRadius: 1000,
        backgroundColor,
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }, posStyles),
      icon: {
        fontSize: iconSize,
        color: iconColor,
      },
    })
  };
};