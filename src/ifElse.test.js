'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call first callback if x === 1', () => {
    const x = 1;

    const fc1 = jest.fn();

    ifElse(() => x === 1, fc1, () => false);
    expect(fc1.mock.calls.length).toBe(1);
  });

  it('should call second callback if x !== 1', () => {
    const x = 2;

    const fc1 = jest.fn();

    ifElse(() => x === 1, fc1, () => false);
    expect(fc1.mock.calls.length).toBe(0);
  });
});
