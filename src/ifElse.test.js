/* eslint-disable max-len */
'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be called', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call the first function when condition returns true', () => {
    const condition = () => true;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second function when condition returns false', () => {
    const condition = () => false;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should not throw an error when condition is a valid function', () => {
    const condition = () => true;
    const first = jest.fn();
    const second = jest.fn();

    expect(() => ifElse(condition, first, second)).not.toThrow();
  });

  it('should throw an error when condition is not a function', () => {
    const condition = true;
    const first = jest.fn();
    const second = jest.fn();

    expect(() => ifElse(condition, first, second)).toThrow();
  });

  it('should throw an error when first is not a function', () => {
    const condition = () => true;
    const first = 'not a function';
    const second = jest.fn();

    expect(() => ifElse(condition, first, second)).toThrow();
  });

  it('should throw an error when second is not a function', () => {
    const condition = () => false;
    const first = jest.fn();
    const second = 'not a function';

    expect(() => ifElse(condition, first, second)).toThrow();
  });

  it('should call condition exactly once', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should work when first function modifies external state', () => {
    let value = 0;
    const condition = () => true;
    const first = () => {
      value = 42;
    };
    const second = () => {
      value = -1;
    };

    ifElse(condition, first, second);

    expect(value).toBe(42);
  });

  it('should work when second function modifies external state', () => {
    let value = 0;
    const condition = () => false;
    const first = () => {
      value = 42;
    };
    const second = () => {
      value = -1;
    };

    ifElse(condition, first, second);

    expect(value).toBe(-1);
  });

  it('should handle a condition that returns a falsy non-boolean value', () => {
    const condition = () => 0; // Falsy
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });
});
