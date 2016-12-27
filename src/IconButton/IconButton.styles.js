import { StyleSheet, Dimensions, Platform } from 'react-native';
import deepAssign from 'deep-assign';
import Color from 'color';


import { getStateStyles } from '../styles/helper';



export default (theme, props) => {

  let { iconColor, backgroundColor, rippleColor } = getStateStyles(theme, props);
  if (!iconColor) {
    iconColor = theme.iconColor;
  }
  if (! backgroundColor) {
    backgroundColor = theme.backgroundColor;
  }
  if (! rippleColor) {
    rippleColor = theme.rippleColor;
  }

  let externalStyles = Array.isArray(props.style) ? StyleSheet.flatten(props.style) : props.style;
  if (externalStyles.color) {
    rippleColor = Color(externalStyles.color).fade(0.95).rgb().toString();
    iconColor = externalStyles.color;
    delete externalStyles.color;
  }
  let fontSize = 14;
  if (externalStyles.fontSize) {
    fontSize = externalStyles.fontSize;
    delete externalStyles.fontSize;
  }

  return {
    ripple: rippleColor,
    sheet: StyleSheet.create({
      container: deepAssign({
        borderRadius: 1000,
        backgroundColor: backgroundColor,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }, externalStyles),

      icon: {
        fontSize: fontSize,
        color: iconColor,
      },
    })
  };
};