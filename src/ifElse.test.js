'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let conditionTrue, conditionFalse;
  let firstCallback, secondCallback;

  beforeEach(() => {
    // Mock condition functions
    conditionTrue = jest.fn(() => true);
    conditionFalse = jest.fn(() => false);

    // Mock callbacks
    firstCallback = jest.fn();
    secondCallback = jest.fn();
  });

  it('should call the first callback when the condition is true', () => {
    ifElse(conditionTrue, firstCallback, secondCallback);

    // Check that condition was called once
    expect(conditionTrue).toHaveBeenCalledTimes(1);

    // Check that the first callback was called and second was not
    expect(firstCallback).toHaveBeenCalledTimes(1);
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call the second callback when the condition is false', () => {
    ifElse(conditionFalse, firstCallback, secondCallback);

    // Check that condition was called once
    expect(conditionFalse).toHaveBeenCalledTimes(1);

    // Check that the second callback was called and first was not
    expect(secondCallback).toHaveBeenCalledTimes(1);
    expect(firstCallback).not.toHaveBeenCalled();
  });

  it('should throw an error if condition is not a function', () => {
    expect(() => ifElse(null, firstCallback, secondCallback))
      .toThrow(TypeError);
  });

  it('should throw an error if the first callback is not a function', () => {
    expect(() => ifElse(conditionTrue, null, secondCallback))
      .toThrow(TypeError);
  });

  it('should throw an error if the second callback is not a function', () => {
    expect(() => ifElse(conditionTrue, firstCallback, null)).toThrow(TypeError);
  });
});
