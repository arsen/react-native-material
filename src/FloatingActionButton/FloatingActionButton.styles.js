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
    rippleColor = Color(props.iconColor).fade(0.5).rgb().toString();
  }

  if (props.mini) {
    width = 40;
    height = 40;
    iconSize = 14;
  }

  let posStyles = {};
  if (props.position) {
    posStyles.position = 'absolute';
    posStyles = Object.assign(posStyles, props.position);
  }

  return {
    ripple: rippleColor,
    borderRadius: props.mini ? 20 : 28,
    sheet: StyleSheet.create({
      container: Object.assign({
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width,
        height,
      }, posStyles),
      containerToolbar: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height,
      },
      contentToolbar: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
      mainButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },
      icon: {
        fontSize: iconSize,
        color: iconColor,
        // position: 'absolute',
        // top: 18.5,
        // left: 18,
      },
      iconHide: {
        fontSize: iconSize,
        color: iconColor,
        position: 'absolute',
        top: 18.5,
        left: 18,
        opacity: 0,
      },
    })
  };
};