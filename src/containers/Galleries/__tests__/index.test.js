import { shallow } from 'enzyme';
import React from 'react';
import Galleries from '../index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});
describe('<Galleries/>', () => {
  const props = {};
  it('renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Galleries {...props} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
