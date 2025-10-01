'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should have 3 arguements', () => {
    expect(ifElse).toBeInstanceOf(Function);
    expect(ifElse.length).toBe(3);
  });

  it('should return first callback is it is true', () => {
    const fnCase = jest.fn(() => true);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    const result = ifElse(fnCase, firstCallback, secondCallback);

    expect(result).toBeUndefined();
    expect(fnCase).toHaveBeenCalledTimes(1);
    expect(fnCase).toHaveBeenCalledWith();
    expect(firstCallback).toHaveBeenCalledTimes(1);
    expect(firstCallback).toHaveBeenCalledWith();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should return second callback, if function returns false', () => {
    const fnCase = jest.fn(() => false);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    const result = ifElse(fnCase, firstCallback, secondCallback);

    expect(result).toBeUndefined();
    expect(fnCase).toHaveBeenCalledTimes(1);
    expect(fnCase).toHaveBeenCalledWith();
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledTimes(1);
    expect(secondCallback).toHaveBeenCalledWith();
  });

  it('should call callbacks, if no condition is fullfilled', () => {
    const fnCase = jest.fn(() => true);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    const result = ifElse(fnCase, firstCallback, secondCallback);

    expect(result).toBeUndefined();
    expect(fnCase).toHaveBeenCalledWith();
    expect(firstCallback).toHaveBeenCalledWith();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call callbacks, if no condition is fullfilled', () => {
    const falsyConditions = [
      () => 1,
      () => 'true',
      () => undefined,
      () => null,
    ];

    falsyConditions.map(condition => {
      const fnCase = jest.fn(condition);
      const firstCallback = jest.fn();
      const secondCallback = jest.fn();

      const result = ifElse(fnCase, firstCallback, secondCallback);

      expect(result).toBeUndefined();
      expect(fnCase).toHaveBeenCalledTimes(1);
      expect(fnCase).toHaveBeenCalledWith();
      expect(firstCallback).not.toHaveBeenCalled();
      expect(secondCallback).toHaveBeenCalledTimes(1);
      expect(secondCallback).toHaveBeenCalledTimes(1);
    });
  });
});
