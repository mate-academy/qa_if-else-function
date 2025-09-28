'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should run 1st callback if condition is true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();

    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();

    expect(second).toHaveBeenCalledTimes(0);
  });

  it('should run 2nd callback if condition is false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();

    expect(first).toHaveBeenCalledTimes(0);

    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
  });
});
