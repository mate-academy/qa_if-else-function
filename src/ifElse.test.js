'use strict';

describe('ifElse', () => {
  const {
    ifElse,
  } = require('./ifElse.js');

  it(`should run 'first' callback if condition is true`, () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => true, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
  });

  it(`should run 'second' callback if condition is false`, () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => false, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should throw if condition is undefined', () => {
    const first = jest.fn();
    const second = jest.fn();

    expect(() => {
      ifElse(undefined, first, second);
    }).toThrow();
    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should throw if condition is null', () => {
    const first = jest.fn();
    const second = jest.fn();

    expect(() => {
      ifElse(null, first, second);
    }).toThrow();
    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });
});
