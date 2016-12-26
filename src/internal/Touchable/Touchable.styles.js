import {
  StyleSheet,
  Platform
} from 'react-native';


export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    // borderWidth: 1,
  },

  fullSize: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },

  ripple: {
    marginTop: -2,
    marginLeft: -2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
