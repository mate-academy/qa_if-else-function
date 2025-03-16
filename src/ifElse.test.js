'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should exist', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should accept 3 arguments', () => {
    expect(ifElse.length).toBe(3);
  });

  it('should not pass arguments to the callback', () => {
    const fn = jest.fn();

    ifElse(() => true, fn, () => { });

    expect(fn)
      .toHaveBeenCalledWith();
  });

  it('should not return a value', () => {
    const result = ifElse(() => true, () => 'test', () => 'test');

    expect(result).toBeUndefined();
  });

  it('should call first callback if condition passes', () => {
    const fn = jest.fn();

    ifElse(() => true, fn, () => { });

    expect(fn)
      .toHaveBeenCalled();
  });

  it('should not call second callback if condition passes', () => {
    const fn = jest.fn();

    ifElse(() => true, () => { }, fn);

    expect(fn)
      .not
      .toHaveBeenCalled();
  });

  it(`should call second callback if condition doesn't pass`, () => {
    const fn = jest.fn();

    ifElse(() => false, () => { }, fn);

    expect(fn)
      .toHaveBeenCalled();
  });

  it(`should not call first callback if doesn't pass`, () => {
    const fn = jest.fn();

    ifElse(() => false, fn, () => { });

    expect(fn)
      .not
      .toHaveBeenCalled();
  });

  // write tests here
});
