import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumbersList from './NumbersList';

configure({ adapter: new Adapter() });

describe('<NumbersList />', () => {
  let primaryNumbers;
  let secondaryNumbers;

  beforeEach(() => {
    primaryNumbers = [12, 16, 21, 40];
    secondaryNumbers = [13];
  });

  it('renders the component on shallow', () => {
    shallow(<NumbersList primaryNumbers={primaryNumbers} secondaryNumbers={secondaryNumbers} />);
  });

  it('renders the component on mount', () => {
    mount(<NumbersList primaryNumbers={primaryNumbers} secondaryNumbers={secondaryNumbers} />);
  });

  it('has the correct number of primary numbers', () => {
    const wrapper = shallow(
      <NumbersList primaryNumbers={primaryNumbers} secondaryNumbers={secondaryNumbers} />
    );

    expect(wrapper.find('NumberContainer')).toHaveLength(5);
  });
});
