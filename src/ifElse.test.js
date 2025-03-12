'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let condition, first, second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  })

  it('should call condition without arguments', () => {
    condition.mockReturnValue(true);
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
  });

  it('should call first callback if condition returns true', () => {
    condition.mockReturnValue(true);
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });
  it('should call second callback if condition returns false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });
  it('should not return any value', () => {
    condition.mockReturnValue(false);

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });
});
