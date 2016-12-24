import { StyleSheet, Dimensions, Platform } from 'react-native';
import deepAssign from 'deep-assign';

const getElevationStyles = (value) => {
  if (! value) {
    return {};
  }
  if (Platform.OS === 'android') {
    return {
      elevation: value,
    };
  }
  else {
    return {
      shadowColor: "black",
      shadowOpacity: 0.3,
      shadowRadius: value,
      shadowOffset: {
        height: 2,
        width: 0
      }
    };
  }
};

export default (props) => {
  let style = {
    backgroundColor: 'white',
  };

  let elevation = props.elevation || 0;
  return deepAssign(style, getElevationStyles(elevation));
};
