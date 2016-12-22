import {Component, PropTypes} from 'react';
import deepAssign from 'deep-assign';

import defaultTheme from './themes/default';

class ThemeProvider extends Component {

  static propTypes = {
    children: PropTypes.element,
    theme: PropTypes.object,
  };

  static defaultProps = {
    theme: {}
  };

  static childContextTypes = {
    theme: PropTypes.object.isRequired,
  };

  getChildContext() {
    return {
      theme: deepAssign(defaultTheme, this.props.theme)
    };
  }

  render() {
    return this.props.children;
  }
}

export default ThemeProvider;