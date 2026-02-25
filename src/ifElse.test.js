'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let conditionTrue;
  let conditionFalse;
  let first;
  let second;

  beforeEach(() => {
    conditionTrue = jest.fn(() => true);
    conditionFalse = jest.fn(() => false);
    first = jest.fn();
    second = jest.fn();
  });

  afterEach(() => {
    conditionTrue.mockRestore();
    conditionFalse.mockRestore();
    first.mockRestore();
    second.mockRestore();
  });

  it('should return noting', () => {
    expect(ifElse(conditionTrue, first, second)).toBeUndefined();
  });

  it('should pass first fuction if condition is true', () => {
    ifElse(conditionTrue, first, second);

    expect(conditionTrue).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should pass first fuction if condition is false', () => {
    ifElse(conditionFalse, first, second);

    expect(conditionFalse).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });
});
