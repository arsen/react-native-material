import React, {
  Component,
  PropTypes,
} from 'react';

import {
  requireNativeComponent,
  View,
  NativeModules,
  findNodeHandle,
} from 'react-native';
const UIManager = NativeModules.UIManager;

// import { convertCoordinate } from '../utils';


class RNMaterialView extends Component {

  _onTouchEvent = (event) => {
    console.log('onTouch');
    if (this.props.onTouch) {
      
    }
  };

  measure(cb) {
    return this.refs.node && UIManager.measure(findNodeHandle(this.refs.node), cb);
  }

  render() {
    return (
      <NativeTouchable
        ref="node"
        {...this.props}
        style={this.props.style}
        onChange={this._onTouchEvent}
        onLayout={this.props.onLayout}
        >
        {this.props.children}
      </NativeTouchable>
    );
  }
}

RNMaterialView.propTypes = {
  ...View.propTypes,
  onTouch: PropTypes.func,
};

const NativeTouchable = requireNativeComponent('RNMaterialView', {
  name: 'RNMaterialView',
  propTypes: RNMaterialView.propTypes,
}, {
    nativeOnly: {
      nativeBackgroundAndroid: true,
      nativeForegroundAndroid: true,
    },
  });

// ## Public interface
module.exports = RNMaterialView;
