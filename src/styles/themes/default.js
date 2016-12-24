import Color from 'color';

import {
  cyan400, cyan500, cyan700,
  pinkA100, pinkA200, pinkA400,
  white, black, transparent,
} from '../colors';


const palette = {
    paperColor: white,
    disabledColor: Color(black).fade(0.8).rgb().toString(),
    primaryColor: cyan500,
    primaryColorLight: cyan400,
    primaryColorDark: cyan700,
    accentColor: pinkA200,
    accentColorLight: pinkA100,
    accentColorDark: pinkA400,

    primaryTextColor: Color(black).fade(0.13).rgb().toString(),
    secondaryTextColor: Color(black).fade(0.46).rgb().toString(),
    disabledTextColor: Color(black).fade(0.62).rgb().toString(),
    alternateTextColor: white,
    transparent: transparent,
};

const FlatButton = {
  backgroundColor: palette.transparent,
  labelColor: palette.primaryTextColor,
  primaryLabelColor: palette.primaryColor,
  secondaryLabelColor: palette.accentColor,
  disabledLabelColor: palette.disabledTextColor,
};

const RaisedButton = {
  backgroundColor: palette.paperColor,
  primaryBackgroundColor: palette.primaryColor,
  secondaryBackgroundColor: palette.accentColor,
  disabledBackgroundColor: palette.disabledColor,
  
  labelColor: palette.primaryTextColor,
  primaryLabelColor: palette.alternateTextColor,
  secondaryLabelColor: palette.alternateTextColor,
  disabledLabelColor: palette.disabledTextColor,
};


/**
 *  Light Theme is the default theme used. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
export default {
  palette,
  FlatButton,
  RaisedButton
};