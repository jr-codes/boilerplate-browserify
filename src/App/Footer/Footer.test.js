import test from 'ava';
import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';

test('<Footer />', t => {
	const wrapper = shallow(<Footer />);

	t.true(wrapper.is('.Footer'));
});
