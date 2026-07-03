'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  let condition;
  let first;
  let second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should call condition with no arguments', () => {
    ifElse(condition, first, second);
    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
  });

  it('should call only first when condition returns true', () => {
    condition.mockReturnValue(true);
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call only second when condition returns false', () => {
    condition.mockReturnValue(false);
    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
  });

  it('should call only second if condition is not true', () => {
    condition.mockReturnValue('truthy');
    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
  });

  it('should return undefined', () => {
    condition.mockReturnValue(true);

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });
});
