import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import SharedLayout from '../../ui/src/components/SharedLayout/SharedLayout';

test.skip('render component', () => {
  // expect(SharedLayout).toBeTruthy();
});

// describe.skip('<SharedLayout />', () => {
//   test.skip('SharedLayout mounts properly', () => {
//     const wrapper = render(<SharedLayout />);
//     expect(wrapper).toBeTruthy();
//   });
// });
