'use strict';

describe(`'ifElse' function`, () => {
  const { ifElse } = require('./ifElse');

  let firstCallback;
  let secondCallback;

  beforeEach(() => {
    firstCallback = jest.fn();
    secondCallback = jest.fn();
  });

  it('should be declared', function() {
    expect(ifElse)
      .toBeInstanceOf(Function);
  });

  it('should return undefined', function() {
    const condition = () => false;

    expect(ifElse(condition, firstCallback, secondCallback))
      .toBeUndefined();
  });

  it('should run the first callback if te condition return true', function() {
    const condition = jest.fn(() => true);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition)
      .toHaveBeenCalled();

    expect(firstCallback)
      .toHaveBeenCalled();

    expect(secondCallback)
      .not.toHaveBeenCalled();
  });

  it('should run the second callback if te condition return false', function() {
    const condition = jest.fn(() => false);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition)
      .toHaveBeenCalled();

    expect(firstCallback)
      .not.toHaveBeenCalled();

    expect(secondCallback)
      .toHaveBeenCalled();
  });
});
