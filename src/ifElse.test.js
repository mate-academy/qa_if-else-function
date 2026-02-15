'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call condition function', () => {
    const condition = jest.fn();

    ifElse(condition, jest.fn(), jest.fn());
    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should call condition function without arguments', () => {
    const condition = jest.fn();

    ifElse(condition, jest.fn(), jest.fn());
    expect(condition).toHaveBeenCalledWith();
  });

  it('should call first if condition returns true', () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();

    ifElse(condition, first, jest.fn());

    expect(first).toHaveBeenCalledTimes(1);
  });

  it('should call second if condition returns false', () => {
    const condition = jest.fn().mockReturnValue(false);
    const second = jest.fn();

    ifElse(condition, jest.fn(), second);

    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should ifElse returns nothing', () => {
    const condition = jest.fn();
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });
});
