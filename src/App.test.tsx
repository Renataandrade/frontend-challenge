import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from 'store/root';

describe('React App', () => {
  it('Deve ser igual ao último snapshot', () => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
