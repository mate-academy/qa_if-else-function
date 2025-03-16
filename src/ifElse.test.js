'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call the first function when the condition is true', () => {
    const condition = jest.fn().mockReturnValue(true);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call the second function when the condition is false', () => {
    const condition = jest.fn().mockReturnValue(false);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  it('call first function when the condition returns true(real value)', () => {
    const condition = () => Math.random() > 0.5;
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    Math.random = jest.fn().mockReturnValue(0.6);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('call second function when condition returns false (real value)', () => {
    const condition = () => Math.random() > 0.5;
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    Math.random = jest.fn().mockReturnValue(0.4);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  it('call first function when M.random returns value greater than -1', () => {
    const condition = () => Math.random() > -1;
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    const originalMathRandom = Math.random;

    Math.random = jest.fn().mockReturnValue(0);

    ifElse(condition, firstCallback, secondCallback);
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
    Math.random = originalMathRandom;
  });
});
