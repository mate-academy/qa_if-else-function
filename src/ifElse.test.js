'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should call the first callback if condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second callback if condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should not return any value', () => {
    const result = ifElse(() => true, () => 1, () => 2);

    expect(result).toBeUndefined();
  });

  it('should only call one of the two callbacks', () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => true, first, second);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(0);

    ifElse(() => false, first, second);
    expect(first).toHaveBeenCalledTimes(1); // no additional call
    expect(second).toHaveBeenCalledTimes(1);
  });
});
