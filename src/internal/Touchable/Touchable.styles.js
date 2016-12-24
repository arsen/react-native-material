import {
  StyleSheet,
  Platform
} from 'react-native';


export default StyleSheet.create({
  container: {
    overflow: 'hidden',
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
