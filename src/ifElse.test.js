'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should ', () => {

  });

  it('should call the first function when the condition is true', () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second function when the condition is false', () => {
    const condition = jest.fn().mockReturnValue(false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('call first function when the condition returns true(real value)', () => {
    const condition = () => Math.random() > 0.5;
    const first = jest.fn();
    const second = jest.fn();

    Math.random = jest.fn().mockReturnValue(0.6);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('call second function when condition returns false (real value)', () => {
    const condition = () => Math.random() > 0.5;
    const first = jest.fn();
    const second = jest.fn();

    Math.random = jest.fn().mockReturnValue(0.4);

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('call first function when M.random returns value greater than -1', () => {
    const condition = () => Math.random() > -1;
    const first = jest.fn();
    const second = jest.fn();

    const originalMathRandom = Math.random;

    Math.random = jest.fn().mockReturnValue(0);

    ifElse(condition, first, second);
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
    Math.random = originalMathRandom;
  });
});
