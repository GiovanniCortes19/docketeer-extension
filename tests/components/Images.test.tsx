import React from 'react';
import { test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../ui/src/store';
import Images from '../../ui/src/components/Images/Images';


describe('Images Dashboard', () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Images />
        </HashRouter>
      </Provider>
    );
  });

  test('Images component should render on page', () => {
    expect(screen.getByText('VULNERABILITIES')).toBeTruthy();
  });

  test('ImageCard components should not be rendering before getting images data', () => {
    expect(screen.queryByText('postgres')).not.toBeInTheDocument();
    expect(screen.queryByText('dockerFizz')).not.toBeInTheDocument();
  });

  test('SummaryBar should be loading', () => { 
    expect(screen.getByText('Loading...')).toBeInTheDocument()
   })

  test('Fetch and display ImageCards: postgres & dockerFizz mocks', async () => {
    expect(await screen.findByText('postgres')).toBeInTheDocument();
    expect(await screen.findByText('dockerFizz')).toBeInTheDocument();
  });



});
