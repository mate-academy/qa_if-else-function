'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should call the first callback if the condition returns true', () => {
    const condition = jest.fn(() => true);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call the second callback if the condition returns false', () => {
    const condition = jest.fn(() => false);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  it('should not return any result to confirm'
    + 'it operates by side effects only', () => {
    const condition = jest.fn(() => true);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    const result = ifElse(condition, firstCallback, secondCallback);

    expect(result).toBeUndefined();
  });

  it('should handle when condition is an empty function', () => {
    const condition = jest.fn(() => {});
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  it('should handle non-boolean return values from condition', () => {
    const condition = jest.fn(() => 'not a boolean');
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
