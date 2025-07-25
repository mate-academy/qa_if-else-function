'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should return undefined', () => {
    expect(
      ifElse(() => true, () => {}, () => {})
    ).toBeUndefined();
  });

  it('should call the first callback if the condition is true', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(() => true, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call the second callback if the condition is false', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(() => false, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
