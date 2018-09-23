import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from '../components/Hello';

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello enthusiasmLevel={1}/>);
  expect(hello.find(".greeting h2").text()).toEqual("I'm so excited!");
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello enthusiasmLevel={5} />);
  expect(hello.find(".greeting h2").text()).toEqual("I'm so excited!!!!!");
});

it('renders the correct text with an explicit enthusiasm level of 6', () => {
  const hello = enzyme.shallow(<Hello enthusiasmLevel={6} />);
  expect(hello.find(".enthusiasm h4").text()).toEqual("Now You're Ready!");
});

it('increases the value when clicked', () => {
    const wrapper = enzyme.shallow(<Hello enthusiasmLevel={1} />);
    wrapper.find('.increment').simulate('click');
    expect(wrapper.find(".greeting h2").text()).toEqual("I'm so excited!!");
});

it('decreases the value when clicked', () => {
    const wrapper = enzyme.shallow(<Hello enthusiasmLevel={2} />);
    wrapper.find('.decrement').simulate('click');
    expect(wrapper.find(".greeting h2").text()).toEqual("I'm so excited!");
});
  
