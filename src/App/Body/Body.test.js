import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import Body from './Body';

test('<Body />', t => {
	const wrapper = shallow(<Body />);

	t.true(wrapper.is('.Body'));
});
