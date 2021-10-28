import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('expect Home to match snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
