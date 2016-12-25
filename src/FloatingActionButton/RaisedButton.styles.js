import { StyleSheet, Dimensions, Platform } from 'react-native';
import deepAssign from 'deep-assign';
import Color from 'color';

export default {

  container: (theme, props) => {
    let bgColor = props.disabled ? theme.disabledBackgroundColor :
      props.primary ? theme.primaryBackgroundColor :
        props.secondary ? theme.secondaryBackgroundColor :
          theme.backgroundColor;

    return styles = {
      backgroundColor: bgColor,
    };
  },

  innerStyle: () => {
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

  labelStyle: (theme, props) => {
    let color = props.disabled ? theme.disabledLabelColor :
      props.primary ? theme.primaryLabelColor :
        props.secondary ? theme.secondaryLabelColor :
          theme.labelColor;

    let styles = {
      fontSize: 14,
      color: color,
    };
    return deepAssign(styles, props.labelStyle);
  },
};