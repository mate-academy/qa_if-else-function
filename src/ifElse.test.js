'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let first;
  let second;

  beforeEach(() => {
    first = jest.fn();
    second = jest.fn();
  });

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should run a `first` callback if `condition` returns `true`', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
  });

  it('should not run a `second` callback if `condition` returns `true`', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(0);
  });

  it('should run a `second` callback if `condition` returns `false`', () => {
    const condition = jest.fn(() => false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should not run a `first` callback if `condition` returns `false`', () => {
    const condition = jest.fn(() => false);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(0);
  });

  it('should not return anything', () => {
    const condition = jest.fn(() => false);

    expect(ifElse(condition, first, second)).toBeUndefined();
  });
});
