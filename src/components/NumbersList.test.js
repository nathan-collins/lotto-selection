import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumbersList from './NumbersList';

configure({ adapter: new Adapter() });

describe('<NumbersList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NumbersList />);
  });

  it('renders the component on shallow', () => {
    shallow(<NumbersList />);
  });

  it('renders the component on mount', () => {
    mount(<NumbersList />);
  });
});
