import { StyleSheet, Dimensions, Platform } from 'react-native';
import deepAssign from 'deep-assign';
import Color from 'color';


import { getStateStyles } from '../styles/helper';



export default (theme, props) => {

  let { labelColor, rippleColor } = getStateStyles(theme, props);
  if (!labelColor) {
    labelColor = theme.labelColor;
  }
  if (! rippleColor) {
    rippleColor = theme.rippleColor;
  }
  

  return {
    ripple: rippleColor,
    sheet: StyleSheet.create({
      container: {
        borderRadius: 2,
        backgroundColor: theme.backgroundColor,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
      icon: {
        fontSize: 14,
        color: labelColor,
      },
      iconLeft: {
        marginRight: 5,
      },
      iconRight: {
        marginLeft: 5,
      },
      label: {
        fontSize: 14,
        color: labelColor,
      },
    })
  };
};