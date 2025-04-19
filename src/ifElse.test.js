'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse)
      .toBeInstanceOf(Function);
  });

  it('should call firstFunc when condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call secondFunc when condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should throw an error if condition is not a function', () => {
    const condition = null;
    const first = jest.fn();
    const second = jest.fn();

    expect(() => ifElse(condition, first, second)).toThrow();
  });

  it('should throw an error if firstFunc is not a function', () => {
    const condition = jest.fn(() => true);
    const first = null;
    const second = jest.fn();

    expect(() => ifElse(condition, first, second)).toThrow();
  });

  it('should throw an error if secondFunc is not a function', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = null;

    expect(() => ifElse(condition, first, second)).toThrow();
  });
});
