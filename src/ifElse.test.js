'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let trueCondition;
  let falseCondition;
  let first;
  let second;

  beforeEach(() => {
    trueCondition = jest.fn(() => true);
    falseCondition = jest.fn(() => false);
    first = jest.fn();
    second = jest.fn();
  });

  afterEach(() => {
    trueCondition.mockClear();
    falseCondition.mockClear();
    first.mockClear();
    second.mockClear();
  });

  // write tests here

  it(`should return something`, () => {
    expect(ifElse(trueCondition, first, second)).toBeUndefined();
  });

  it(`should call first once if condition returns true`, () => {
    ifElse(trueCondition, first, second);

    expect(trueCondition).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it(`should call second once if condition returns false`, () => {
    ifElse(falseCondition, first, second);

    expect(falseCondition).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });
});
