'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should run first if condition is true', () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => true, first, second);
    expect(first).toBeCalledTimes(1);
    expect(second).toBeCalledTimes(0);
  });

  it('should run second if condition is false', () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => false, first, second);
    expect(first).toBeCalledTimes(0);
    expect(second).toBeCalledTimes(1);
  });

  it('should throw error if no arguments', () => {
    expect(() => ifElse()).toThrow();
  });
});
