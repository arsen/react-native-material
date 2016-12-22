import {
  StyleSheet,
  Platform
} from 'react-native';


export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 2,
    // borderWidth: 1,
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
    width: 4,
    height: 4,
    borderRadius: 4,
    marginTop: -2,
    marginLeft: -2,
    position: 'absolute',
    top: 0, 
    left: 0,
    right: 0,
    bottom: 0,
  }
});
