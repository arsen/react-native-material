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


  return {
    ripple: rippleColor,
    sheet: StyleSheet.create({
      container: {
        borderRadius: 500,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
      icon: {
        fontSize: iconSize,
        color: iconColor,
      },
    })
  };
};