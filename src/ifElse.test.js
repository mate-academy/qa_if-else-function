'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let firstCallback;
  let secondCallback;
  let condition;

  beforeEach(() => {
    firstCallback = jest.fn();
    secondCallback = jest.fn();
    condition = jest.fn();
  });

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should return undefined', () => {
    expect(ifElse(condition, firstCallback, secondCallback)).toBeUndefined();
  });

  it('should launch condition Callback in any case', () => {
    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
  });

  it('should run first Callback if condition is true', () => {
    condition = jest.fn(() => true);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should run second Callback if condition is false', () => {
    condition = jest.fn(() => false);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
