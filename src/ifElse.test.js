'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call the first callback when condition returns true', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(() => true, firstCallback, secondCallback);
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call the second callback when condition returns false', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(() => false, firstCallback, secondCallback);
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  it('should return undefined', () => {
    const result = ifElse(
      () => Math.random() > 0.5,
      () => (1),
      () => (2)
    );

    expect(result).toBeUndefined();
  });
});
