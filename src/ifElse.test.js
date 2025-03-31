/* eslint-disable no-console */
'use strict';

const { ifElse } = require('./ifElse');

// Mock functions to track execution
const mockConditionTrue = () => true;
const mockConditionFalse = () => false;
const mockFirst = jest.fn();
const mockSecond = jest.fn();

describe('ifElse', () => {
  beforeEach(() => {
    // Reset mock calls before each test
    mockFirst.mockClear();
    mockSecond.mockClear();
  });

  it('should call first callback when condition returns true', () => {
    ifElse(mockConditionTrue, mockFirst, mockSecond);

    expect(mockFirst).toHaveBeenCalledTimes(1);
    expect(mockFirst).toHaveBeenCalledWith(); // Called with no arguments
    expect(mockSecond).not.toHaveBeenCalled();
  });

  it('should call second callback when condition returns false', () => {
    ifElse(mockConditionFalse, mockFirst, mockSecond);

    expect(mockSecond).toHaveBeenCalledTimes(1);
    expect(mockSecond).toHaveBeenCalledWith(); // Called with no arguments
    expect(mockFirst).not.toHaveBeenCalled();
  });

  it('should call condition function once with no arguments', () => {
    const mockCondition = jest.fn(() => true);

    ifElse(mockCondition, mockFirst, mockSecond);

    expect(mockCondition).toHaveBeenCalledTimes(1);
    expect(mockCondition).toHaveBeenCalledWith();
  });

  it('should not return any value', () => {
    const result = ifElse(mockConditionTrue, mockFirst, mockSecond);

    expect(result).toBeUndefined();
  });

  it('should work with example case', () => {
    // Using console.log spies instead of actual console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    ifElse(
      () => Math.random() > 0.5,
      () => console.log(1),
      () => console.log(2)
    );

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect([1, 2]).toContain(consoleSpy.mock.calls[0][0]);

    consoleSpy.mockRestore();
  });
});
