import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumbersSelection from './NumbersSelection';

configure({ adapter: new Adapter() });

describe('<NumbersSelection />', () => {
  it('renders the component on shallow', () => {
    shallow(<NumbersSelection />);
  });

  it('renders the component on mount', () => {
    mount(
      <NumbersSelection name="primary" totalNumbers="10" numbers={[12, 10]} />
    );
  });

  it('sets the correct amount of numbers in boxes', () => {
    const totalNumbers = 35;
    const wrapper = shallow(
      <NumbersSelection
        name="primary"
        totalNumbers={totalNumbers}
        numbers={[12, 10]}
      />
    );

    expect(wrapper.find('NumberContainer')).toHaveLength(totalNumbers);
  });

  it('sets the correct title', () => {
    const title = 'Some title';

    const wrapper = shallow(<NumbersSelection name="primary" title={title} />);
    console.log(wrapper.debug());

    expect(wrapper.find('.title').text()).toBe(title);
  });

  if (
    ('Does not set the title and it is not visible',
    () => {
      const wrapper = shallow(<NumbersSelection />);
      console.log(wrapper.debug());

      expect(wrapper.find('.title').exists()).toBeTruthy();
    })
  );
});
