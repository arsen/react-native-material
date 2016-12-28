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
  rippleColor: Color(palette.primaryTextColor).fade(0.9).rgb().toString(),
  primary: {
    labelColor: palette.primaryColor,
    rippleColor: Color(palette.primaryColor).fade(0.92).rgb().toString(),
  },
  secondary: {
    labelColor: palette.accentColor,
    rippleColor: Color(palette.accentColor).fade(0.92).rgb().toString(),
  },
  disabled: {
    labelColor: palette.disabledTextColor,
  }
};

const RaisedButton = {
  backgroundColor: palette.paperColor,
  labelColor: palette.primaryTextColor,
  rippleColor: Color(palette.primaryTextColor).fade(0.94).rgb().toString(),
  primary: {
    backgroundColor: palette.primaryColor,
    labelColor: palette.alternateTextColor,
    rippleColor: Color(palette.alternateTextColor).fade(0.85).rgb().toString(),
  },
  secondary: {
    backgroundColor: palette.accentColor,
    labelColor: palette.alternateTextColor,
    rippleColor: Color(palette.alternateTextColor).fade(0.85).rgb().toString(),
  },
  disabled: {
    backgroundColor: palette.disabledColor,
    labelColor: palette.disabledTextColor,
  },
};

const IconButton = {
  backgroundColor: palette.transparent,
  iconColor: palette.primaryTextColor,
  rippleColor: Color(palette.primaryTextColor).fade(0.9).rgb().toString(),
  disabled: {
    iconColor: palette.disabledTextColor,
  }
};


const FloatingActionButton = {
  backgroundColor: palette.accentColor,
  iconColor: palette.alternateTextColor,
  rippleColor: Color(palette.alternateTextColor).fade(0.80).rgb().toString(),
};


export default {
  palette,
  FlatButton,
  RaisedButton,
  IconButton,
  FloatingActionButton
};