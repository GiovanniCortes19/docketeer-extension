import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { expect, afterEach, vi } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

// clean up after each test case
afterEach(() => {
  cleanup();
});