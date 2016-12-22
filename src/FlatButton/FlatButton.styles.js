import { StyleSheet, Dimensions, Platform } from 'react-native';
import deepAssign from 'deep-assign';

export default {

  default: (theme, props) => {
    let styles = {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 8,
      backgroundColor: theme.palette.transparent,
      borderWidth: 1,
    };

    return deepAssign(styles, props.styles);
  },

  ripplePadding: (theme, props) => {
    return {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 8,
    };
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