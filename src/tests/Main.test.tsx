import * as React from 'react';
import * as enzyme from 'enzyme';
import Main from '../components/Main';

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const main = enzyme.shallow(<Main title={"Pigging Out in Spokane"}/>);
  expect(main.find(".main h1").text()).toEqual("Pigging Out in Spokane")
});


