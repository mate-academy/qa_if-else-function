'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let condition;
  let first;
  let second;

  beforeEach(() => {
    condition = jest.fn().mockReturnValue(true);
    first = jest.fn();
    second = jest.fn();
  });

  it(`should be declared`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
    expect(ifElse(condition, first, second)).toBeUndefined();
  });

  it('should call first callback when condition returns true', () => {
    ifElse(condition, first, second);
    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second callback when condition returns false', () => {
    condition.mockReturnValue(false);
    ifElse(condition, first, second);
    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
  });
});
