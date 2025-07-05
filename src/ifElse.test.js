'use strict';

describe('ifElse', () => {
  let condition;
  let first;
  let second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  const { ifElse } = require('./ifElse');

  it('should be a function', () => {
    expect(typeof ifElse).toBe('function');
  });

  it('should return undefined', () => {
    expect(ifElse(condition, first, second)).toBeUndefined();
  });

  it('should receive 3 callbacks', () => {
    expect(typeof condition).toBe('function');
    expect(typeof first).toBe('function');
    expect(typeof second).toBe('function');
    expect(ifElse).toHaveLength(3);
  });

  it('calls "first" cb with no arguments when condition is true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    // Condition should be called once
    expect(condition).toHaveBeenCalledTimes(1);
    // Condition should be called with no arguments
    expect(condition).toHaveBeenCalledWith();

    // First should be called once
    expect(first).toHaveBeenCalledTimes(1);
    // First should not be called with arguments
    expect(first).toHaveBeenCalledWith();
  });

  it('calls "second" cb with no arguments when condition is false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    // Condition should be called once
    expect(condition).toHaveBeenCalledTimes(1);
    // Condition should be called with no arguments
    expect(condition).toHaveBeenCalledWith();

    // Second should be called once
    expect(second).toHaveBeenCalledTimes(1);
    // Second should not be called with arguments
    expect(second).toHaveBeenCalledWith();
  });
});
