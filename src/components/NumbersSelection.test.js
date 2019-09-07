import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumbersSelection from './NumbersSelection';

configure({ adapter: new Adapter() });

describe('<NumbersSelection />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NumbersSelection />);
  });

  it('renders the component on shallow', () => {
    shallow(<NumbersSelection />);
  });

  it('renders the component on mount', () => {
    mount(<NumbersSelection />);
  });
});
