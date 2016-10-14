import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

test('<Header />', t => {
	const wrapper = shallow(<Header />);

	t.true(wrapper.is('.Header'));
});
