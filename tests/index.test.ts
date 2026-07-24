import { describe, it, expect } from 'vitest';
import { searchGoogle } from '../src/index.js';

describe('free-google-serp', () => {
  it('should error out on empty search queries', async () => {
    await expect(searchGoogle('')).rejects.toThrow('Query is required');
  });
});