'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should return nothing', () => {
    const result = ifElse(() => true, () => {}, () => {});

    expect(result).toBeUndefined();
  });

  it('should launch fn1 if condition is `true`', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();

    ifElse(() => true, fn1, fn2);
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).not.toHaveBeenCalled();
  });

  it('should launch fn2 if condition is `false`', () => {
    const fn1 = jest.fn();
    const fn2 = jest.fn();

    ifElse(() => false, fn1, fn2);
    expect(fn1).not.toHaveBeenCalled();
    expect(fn2).toHaveBeenCalledTimes(1);
  });
});
