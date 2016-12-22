import Color from 'color';

import {
  cyan400, cyan500, cyan700,
  pinkA100, pinkA200, pinkA400,
  white, black, transparent,
} from '../colors';


/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
export default {
  palette: {
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
  },
};