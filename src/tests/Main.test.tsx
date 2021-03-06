import * as React from 'react';
import * as enzyme from 'enzyme';
import Main from '../components/Main';

it('renders the correct title', () => {
  const main = enzyme.shallow(<Main />);
  expect(main.find(".title").text()).toEqual("Pigging Out in Spokane")
});

it('renders the correct subtitle', () => {
  const main = enzyme.shallow(<Main />);
  expect(main.find(".subtitle").text()).toEqual("A Trip Years in the Making")
});


