import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberContainer from './NumberContainer';

configure({ adapter: new Adapter() });

describe('<NumberContainer />', () => {
  it('renders the component on shallow', () => {
    shallow(<NumberContainer type="circle" number={12} />);
  });

  it('renders the component on mount', () => {
    mount(<NumberContainer type="circle" number={12} />);
  });
});
