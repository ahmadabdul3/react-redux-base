// var assert = require('assert');
// var React = require('react');
// var LoginPage = require('../../../src/pages/login_page.js');
// var FormInput = require('../../../src/react_bb/form_input.js');
// var shallow = require('enzyme').shallow;
// var sinon = require('sinon');
// var expect = require('chai').expect;

import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() });
// import LoginPage from '../../../src/pages/login_page';
import FormInput from '../../../src/react_bb/form_input';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import expect from 'chai';


describe('FormInput', function() {
  it('renders an error message when passed as a prop', function() {
    var wrapper = shallow(<FormInput />);
    expect(wrapper.find('.form-input__message')).to.exist;
  });
});
