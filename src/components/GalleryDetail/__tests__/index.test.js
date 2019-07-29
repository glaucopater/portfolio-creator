import { shallow } from 'enzyme';
import React from 'react';
import Question from '../index';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();
const store = mockStore({});

describe('<Question/>', () => {
  it('renders correctly', () => {
    const props = {
      question: '',
      published_at: '',
      url: '',
      choices: [],
      voteQuestion: jest.fn(),
    };
    const wrapper = shallow(<Question {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
