import React from 'react';
import Login from '../src/app/components/login/login';

describe('Comment item', () => {
  const wrapper = shallow(<Login />);

  it('should be a list item', () => {
    expect(wrapper.type()).to.eql('div');
  });
});