'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call first callback with no arguments if condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });

  it('should call second callback with no arguments if condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
    expect(second).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });
});
