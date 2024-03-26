'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let firstCallback;
  let secondCallback;

  it('should be declarated', () => {
    expect(ifElse).toBeDefined();
  });

  beforeEach(() => {
    firstCallback = jest.fn();
    secondCallback = jest.fn();
  });

  it('should return result of first callback if condition is true', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should return result of second callback if condition is false', () => {
    const condition = jest.fn(() => false);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
