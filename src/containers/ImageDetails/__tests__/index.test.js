import { shallow } from 'enzyme';
import React from 'react';
import Questions from '../index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});
describe('<Questions/>', () => {
  const props = {
    questions: { data: [] },
    voteQuestion: jest.fn(),
    fetchQuestions: jest.fn(),
  };
  it('renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Questions {...props} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
