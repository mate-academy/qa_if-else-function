'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let firstCallback;
  let secondCallback;

  beforeEach(() => {
    firstCallback = jest.fn();
    secondCallback = jest.fn();
  });

  it('should be a function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call first cb if condition === true', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call second cb if condition === false', () => {
    const condition = jest.fn(() => false);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
