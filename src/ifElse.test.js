'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let condition, first, second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should declareted a function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should call 'first' if 'condition' return true`, () => {
    condition.mockReturnValue(true);

    const result = ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });

  it(`should call 'second' if 'condition' return false`, () => {
    condition.mockReturnValue(false);

    const result = ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });
});
