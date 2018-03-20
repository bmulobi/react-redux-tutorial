import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';
import {mount, shallow} from 'enzyme';

function setUp(saving) {
  let props  = {
    course: {}, saving: saving, errors: {},
    onSave: () => {}, onChange: () => {}
  };

  return shallow(<CourseForm {...props}/>);
}

describe('CourseForm via enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setUp(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setUp(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setUp(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
