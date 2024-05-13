'use strict';
/* eslint-disable */

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  const conditionTrue = () => true;
  const conditionFalse = () => false;

  let first = jest.fn();
  let second = jest.fn();

  // to refresh their call count
  afterEach(() => {
    first = jest.fn();
    second = jest.fn();
  });

  it('returns nothing', () => {
    const result = ifElse(conditionTrue, first, second);

    expect(result).toBeUndefined();
  });

  it('runs the first one if the condition is true', () => {


    ifElse(conditionTrue, first, second);

    expect(first).toHaveBeenCalledTimes(1);
  });

  it('runs the second one if the condition is false', () => {
    ifElse(conditionFalse, first, second);

    expect(second).toHaveBeenCalledTimes(1);
  });
});
