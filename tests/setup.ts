import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';
import { expect, afterEach, vi } from 'vitest';

// // clean up after each test case
// afterEach(() => {
//   cleanup();
// });

beforeAll(() => {
  vi.mock('docker', () => {});
});
