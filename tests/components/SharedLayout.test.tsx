import React from 'react';
import { test, expect, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../ui/src/store';
import { HashRouter } from 'react-router-dom';

import SharedLayout from '../../ui/src/components/SharedLayout/SharedLayout';

// import * as ddClientRequestModule from '../../ui/src/models/ddClientRequest';
// vi.mock('@docker/extension-api-client', () => {
//   const createDockerDesktopClient = vi.fn();
//   createDockerDesktopClient.prototype.extension.vm.service.request = vi.fn();
//   return { createDockerDesktopClient };
// });

// let ddClient;

// beforeEach(() => { 
//   ddClient = new createDockerDesktopClient();
//  })
// const ddClientMock = vi.spyOn(ddClientRequestModule, 'ddClientRequest');



test('Should show title', () => {
  render(
    <Provider store={store}>
      <HashRouter>
        <SharedLayout />
      </HashRouter>
    </Provider>
  )
  
  const title = screen.getByText('Docketeer')
  expect(title).toBeTruthy();
});

describe('Display all navbar tabs', () => { 

  beforeEach(async () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <SharedLayout />
        </HashRouter>
      </Provider>
    );
  });

  afterEach(cleanup)
  
  test('CONTAINERS', () => {
    const tab = screen.getByText('CONTAINERS')
    expect(tab).toBeTruthy();
  })
  test('IMAGES', () => {
    const tab = screen.getByText('IMAGES')
    expect(tab).toBeTruthy();
  })
  test('NETWORKS', () => {
    const tab = screen.getByText('NETWORKS')
    expect(tab).toBeTruthy();
  })
  test('Hamburger Menu Icon', () => {
    const hamburgerIcon = screen.getByRole('button')
    expect(hamburgerIcon).toBeTruthy();
  })

  describe('Show all hamburger menu options when clicked', () => { 
    
    const user = userEvent.setup();

    test('Display SideBar component containing menu options', async () => { 
      await user.click(screen.getByRole('button'));
      expect(screen.getByTestId('sidebar')).toBeInTheDocument()
     })
    test('CONTAINER METRICS', async () => { 
      await user.click(screen.getByRole('button'));
      expect(screen.getByText('CONTAINER METRICS')).toBeTruthy();
     })
    test('SNAPSHOTS', async () => { 
      await user.click(screen.getByRole('button'));
      expect(screen.getByText('SNAPSHOTS')).toBeTruthy();
     })
    test('KUBERNETES METRICS', async () => { 
      await user.click(screen.getByRole('button'));
      expect(screen.getByText('KUBERNETES METRICS')).toBeTruthy();
     })
    test('VOLUMES', async () => { 
      await user.click(screen.getByRole('button'));
      expect(screen.getByText('VOLUMES')).toBeTruthy();
     })
    test('PROCESS LOGS', async () => { 
      await user.click(screen.getByRole('button'));
      expect(screen.getByText('PROCESS LOGS')).toBeTruthy();
     })
    test('CONFIGURATIONS', async () => { 
      await user.click(screen.getByRole('button'));
      expect(screen.getByText('CONFIGURATIONS')).toBeTruthy();
     })
    test('PRUNE', async () => { 
      await user.click(screen.getByRole('button'));
      expect(screen.getByText('PRUNE')).toBeTruthy();
     })

   })

 })
