import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({ galleries: [] });

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {};
  ReactDOM.render(
    <Provider store={store}>
      <App {...props} />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
