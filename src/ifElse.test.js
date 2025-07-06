'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let condition;
  let first;
  let second;

  beforeEach(() => {
    condition = jest.fn().mockReturnValue(true);
    first = jest.fn().mockReturnValue(1);
    second = jest.fn().mockReturnValue(2);
  });

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should accept 3 callbacks as argument', () => {
    expect(() => ifElse(condition, first, second)).not.toThrow();
  });

  it('should trow error for 1 args', () => {
    expect(() => ifElse(condition)).toThrow();
  });

  it('should trow error for 4 args', () => {
    expect(() => ifElse(condition)).toThrow();
  });

  it('should trow error for 0 args', () => {
    expect(() => ifElse()).toThrow();
  });

  it('condition should contain no args', () => {
    expect(() => ifElse(condition, first, second)).not.toThrow();
    condition = jest.fn(true);
    expect(() => ifElse(condition, first, second)).toThrow();
  });

  it('first should contain no args', () => {
    expect(() => ifElse(condition, first, second)).not.toThrow();
    first = jest.fn(1);
    expect(() => ifElse(condition, first, second)).toThrow();
  });

  it('second should contain no args', () => {
    condition = jest.fn().mockReturnValue(false);
    expect(() => ifElse(condition, first, second)).not.toThrow();
    second = jest.fn(1);
    expect(() => ifElse(condition, first, second)).toThrow();
  });

  it('should return no values', () => {
    const result = ifElse(condition, first, second);

    expect(result).toBe(undefined);
  });

  it('should run first if condition is true', () => {
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should run second if condition is false', () => {
    condition = jest.fn().mockReturnValue(false);
    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });
});
