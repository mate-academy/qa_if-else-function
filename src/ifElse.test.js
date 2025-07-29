'use strict';

// @ts-check
/// <reference types="jest" />

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let condition, first, second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should no return value', () => {
    const result = ifElse(condition, first, second);

    expect(result).toBe(undefined);
  });

  it('should call condition once', () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should call only first if condition is true', () => {
    const trueCondition = jest.fn().mockReturnValue(true);

    ifElse(trueCondition, first, second);

    expect(second).not.toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
  });

  it('should call second if condition is false', () => {
    const falseCondition = jest.fn().mockReturnValue(false);

    ifElse(falseCondition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });
});
