'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let first;
  let second;
  let trueCondition;
  let falseCondition;

  beforeEach(() => {
    trueCondition = jest.fn(() => true);
    falseCondition = jest.fn(() => false);
    first = jest.fn(() => {});
    second = jest.fn(() => {});
  });

  it('should call a first callback if condition returns true', () => {
    ifElse(trueCondition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call a second callback if condition return false', () => {
    ifElse(falseCondition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should return nothing', () => {
    const result = ifElse(falseCondition, first, second);

    expect(result).toBeUndefined();
  });
});
