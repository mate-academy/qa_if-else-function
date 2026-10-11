'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let condition, first, second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should return first if condition === true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should execute second callback when condition returns false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);
    
    expect(condition).toHaveBeenCalledTimes(1)
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should not return any value', () => {
    const result = ifElse(() => true, () => {}, () => {});
    expect(result).toBeUndefined();
  });

  // write tests here
});
