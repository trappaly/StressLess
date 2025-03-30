import { describe, it, expect } from 'vitest';
import { port, counter } from './index';

describe('Sample Test Suite', () => {
  it('should pass this test', () => {
    expect(2 + 2).toBe(4);
  });

  it('should default to port 3001', () => {
    expect(port).toBe(3001);
  });

  it('counter initializes to 0', () => {
    expect(counter).toBe(0);
  });
});
