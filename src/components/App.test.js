import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

test('<App />', t => {
	const wrapper = shallow(<App />);

	t.is(wrapper.find('Header').length, 1);
	t.is(wrapper.find('Body').length, 1);
	t.is(wrapper.find('Footer').length, 1);
});
