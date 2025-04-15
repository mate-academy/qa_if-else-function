'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it(`should be declared`, () => {
    expect(ifElse)
      .toBeInstanceOf(Function);
  });

  it('should call firstFunc when condition returns true', () => {
    const condition = jest.fn(() => true);
    const firstFunc = jest.fn();
    const secondFunc = jest.fn();

    ifElse(condition, firstFunc, secondFunc);

    expect(condition).toHaveBeenCalled();
    expect(firstFunc).toHaveBeenCalled();
    expect(secondFunc).not.toHaveBeenCalled();
  });

  it('should call secondFunc when condition returns false', () => {
    const condition = jest.fn(() => false);
    const firstFunc = jest.fn();
    const secondFunc = jest.fn();

    ifElse(condition, firstFunc, secondFunc);

    expect(condition).toHaveBeenCalled();
    expect(firstFunc).not.toHaveBeenCalled();
    expect(secondFunc).toHaveBeenCalled();
  });

  it('should throw an error if condition is not a function', () => {
    const condition = null;
    const firstFunc = jest.fn();
    const secondFunc = jest.fn();

    expect(() => ifElse(condition, firstFunc, secondFunc)).toThrow();
  });

  it('should throw an error if firstFunc is not a function', () => {
    const condition = jest.fn(() => true);
    const firstFunc = null;
    const secondFunc = jest.fn();

    expect(() => ifElse(condition, firstFunc, secondFunc)).toThrow();
  });

  it('should throw an error if secondFunc is not a function', () => {
    const condition = jest.fn(() => false);
    const firstFunc = jest.fn();
    const secondFunc = null;

    expect(() => ifElse(condition, firstFunc, secondFunc)).toThrow();
  });
});
