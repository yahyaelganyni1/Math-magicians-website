import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

it('expect Calculator to match snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
