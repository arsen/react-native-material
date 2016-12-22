import { StyleSheet, Dimensions, Platform } from 'react-native';
import deepAssign from 'deep-assign';
import Color from 'color';

export default {

  default: (theme, props) => {
    let styles = {
      
      backgroundColor: theme.palette.transparent,
      // backgroundColor: '#eee',
      // elevation: 1,
      // flexDirection: 'row',
    };

    return deepAssign(styles, props.style);
  },

  rippleStyles: (theme, props) => {
    return {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 8,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    };
  },

  rippleColor: (theme, props) => {
    let color = props.disabled ? theme.palette.disabledTextColor :
      props.primary ? theme.palette.primaryColor :
        props.secondary ? theme.palette.accentColor :
          theme.palette.primaryTextColor;
    return Color(color).fade(0.9).rgb().toString();
  },

  rippleOverlayColor: (theme, props) => {
    let color = props.disabled ? theme.palette.disabledTextColor :
      props.primary ? theme.palette.primaryColor :
        props.secondary ? theme.palette.accentColor :
          theme.palette.primaryTextColor;
    return Color(color).fade(0.95).rgb().toString();
  },

  label: (theme, props) => {
    let color = props.disabled ? theme.palette.disabledTextColor :
      props.primary ? theme.palette.primaryColor :
        props.secondary ? theme.palette.accentColor :
          theme.palette.primaryTextColor;

    let styles = {
      fontSize: 14,
      color: color,
    };

    return deepAssign(styles, props.styles);
  }
};