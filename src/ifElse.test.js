'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared and accept exactly 3 arguments', () => {
    expect(ifElse).toBeInstanceOf(Function);
    expect(ifElse.length).toBe(3);
  });

  it('should call the first callback if condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second callback if condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
  });

  it('should call callbacks and condition with no arguments', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('should treat any non-true value as false', () => {
    const nonTrueConditions = [
      () => 1,
      () => 'true',
      () => undefined,
      () => null,
    ];

    for (const condFactory of nonTrueConditions) {
      const cond = jest.fn(condFactory);
      const first = jest.fn();
      const second = jest.fn();

      const result = ifElse(cond, first, second);

      expect(result).toBeUndefined();
      expect(cond).toHaveBeenCalledTimes(1);
      expect(cond).toHaveBeenCalledWith();
      expect(first).not.toHaveBeenCalled();
      expect(second).toHaveBeenCalledTimes(1);
      expect(second).toHaveBeenCalledWith();
    }
  });
});
