import 'react-native';
import React from 'react';
import ThemeProvider from '../styles/ThemeProvider';
import FlatButton from './FlatButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Flatbutton renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider>
      <FlatButton label="Flat Button" />
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
