'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let firstCallback;
  let secondCallback;

  beforeEach(() => {
    firstCallback = jest.fn();
    secondCallback = jest.fn();
  });

  it('should be defined', () => {
    expect(ifElse).toBeDefined();
  });

  it('should run first callback if condition returns true', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, firstCallback, secondCallback);
    expect(condition).toHaveBeenCalled();
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should run second callback if condition returns false', () => {
    const condition = jest.fn(() => false);

    ifElse(condition, firstCallback, secondCallback);
    expect(condition).toHaveBeenCalled();
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  it('should return undefined', () => {
    const result = ifElse(() => {}, () => {}, () => {});

    expect(result).toBeUndefined();
  });
});
