import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumbersSelection from './NumbersSelection';

configure({ adapter: new Adapter() });

describe('<NumbersSelection />', () => {
  it('renders the component on shallow', () => {
    shallow(<NumbersSelection name="primary" totalNumbers={35} numbers={[12, 10]} title="test" />);
  });

  it('renders the component on mount', () => {
    mount(<NumbersSelection name="primary" totalNumbers={35} numbers={[12, 10]} title="test" />);
  });

  it('sets the correct amount of numbers in boxes', () => {
    const totalNumbers = 35;
    const wrapper = shallow(
      <NumbersSelection
        name="primary"
        totalNumbers={totalNumbers}
        numbers={[12, 10]}
        title="test"
      />
    );

    expect(wrapper.find('NumberContainer')).toHaveLength(totalNumbers);
  });

  it('sets the correct title', () => {
    const title = 'Some title';

    const wrapper = shallow(<NumbersSelection name="primary" title={title} />);

    expect(wrapper.find('.title').text()).toBe(title);
  });

  it('Does not set the title and it is not visible', () => {
    const wrapper = shallow(<NumbersSelection />);
    expect(wrapper.find('.title').exists()).toBe(false);
  });
});
