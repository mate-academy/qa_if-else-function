'use strict';

describe('ifElse', () => {
  // const { ifElse } = require('./ifElse');
  const { ifElse } = require('./ifElse');

  it('should run the first callback if condition returns true', () => {
    const condition = jest.fn(() => true);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should run the second callback if condition returns false', () => {
    const condition = jest.fn(() => false);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
