import { describe, expect, test } from 'vitest';

describe('Should be an initial vitest config test', () => {
  test('Should be return Hello world!!', () => {
    const test = 'Hello world!!';
    expect(test).toBe('Hello world!!');
  });
});
