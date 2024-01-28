import { describe, test, expect, beforeEach } from 'vitest';
import { RenderResult, render, screen } from '@testing-library/react';
// import '../../__mocks__/@docker/extension-api-client.mock';
// import './node_modules/@docker/extension-api-client';
import React from 'react';

import App from '../../ui/src/App';
import { Provider } from 'react-redux';
import store from '../../ui/src/store';
import { HashRouter } from 'react-router-dom';

describe('<App />', () => {
  // test('App mounts properly', () => {
  //   const wrapper = render(<App />);
  //   expect(wrapper).toBeTruthy();
  // });
  let app: RenderResult;
  // RENDER APP BEFORE TESTS
  beforeEach(async () => {
    app = await render(
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    );
  });
  // TESTS
  test('App should mount properly', () => {
    expect(app).toBeTruthy();
  });
});
