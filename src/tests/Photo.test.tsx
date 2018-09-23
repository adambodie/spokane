import * as React from 'react';
import * as enzyme from 'enzyme';
import Photo from '../components/Photo';

it('renders the correct title', () => {
	const wrapper = enzyme.shallow(<Photo farm={"123"} server={"456"} id={"789"} secret={"101112"} title={"Title"} index={"2"} />);
	expect(wrapper.find('h4').text()).toEqual("Title");
});

it('renders the correct image', () => {
	const wrapper = enzyme.shallow(<Photo farm={"123"} server={"456"} id={"789"} secret={"101112"} title={"Title"} index={"2"} />);
	expect(wrapper.find('img').html()).toEqual('<img src="https://farm123.staticflickr.com/456/789_101112_z.jpg" alt="Title"/>');
});
