'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let value;
  let first;
  let second;

  beforeEach(() => {
    value = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should be a function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call first when value is true', () => {
    value.mockReturnValue(true);
    ifElse(value, first, second);

    expect(value).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(0);

    expect(value).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalledWith();
  });

  it('should call second when value is false', () => {
    value.mockReturnValue(false);
    ifElse(value, first, second);

    expect(value).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(0);
    expect(second).toHaveBeenCalledTimes(1);

    expect(value).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalledWith();
    expect(second).toHaveBeenCalledWith();
  });

  it('should return undefined', () => {
    value.mockReturnValue(true);

    const result = ifElse(value, first, second);

    expect(result).toBeUndefined();
  });
});
