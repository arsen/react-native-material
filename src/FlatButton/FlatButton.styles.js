import { StyleSheet, Dimensions, Platform } from 'react-native';
import deepAssign from 'deep-assign';
import Color from 'color';

export default {

  container: (theme, props) => {
    let styles = {
      backgroundColor: theme.backgroundColor,
    };
    return deepAssign(styles, props.style);
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