'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  const f = jest.fn();

  it('should calls f if condition is true', () => {
    ifElse(() => true, f, () => {});

    expect(f).toHaveBeenCalledTimes(1);
  });

  it('should calls g if condition is false', () => {
    const g = jest.fn();
    ifElse(() => false, f, g);

    expect(g).toHaveBeenCalledTimes(1);
  });

  it('should return undefined', () => {
    const result = ifElse(() => true, () => 1, () => 2);
    expect(result).toBeUndefined();
  });

  it('should return undefined when condition is false', () => {
    const result = ifElse(() => false, () => 1, () => 2);
    expect(result).toBeUndefined();
  });
});
