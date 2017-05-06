import React from 'react';
import Footer from '../src/components/footer/footer';

describe('Comment item', () => {
  const wrapper = shallow(<Footer />);

  it('should be a Footer', () => {
    expect(wrapper.type()).to.eql('div');
  });
});