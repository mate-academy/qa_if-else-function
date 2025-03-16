'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let first, second, condition;

  beforeEach(() => {
    first = jest.fn();
    second = jest.fn();
    condition = jest.fn();
  });

  it('should call condition only once', () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should call the first callback if condition returns true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second callback if condition returns false', () => {
    condition = jest.fn(() => false);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should return undefined', () => {
    expect(ifElse(() => true, first, second)).toBeUndefined();
  });
});
