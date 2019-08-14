import { shallow } from 'enzyme';
import React from 'react';
import Gallery from '../index';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

describe('<Gallery/>', () => {
  it('renders correctly', () => {
    const props = {
      published_at: '',
      url: '',
    };
    const wrapper = shallow(<Gallery {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
