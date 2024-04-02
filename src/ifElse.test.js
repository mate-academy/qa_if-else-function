'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call the first callback if the condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second callback if the condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });

  it('should handle conditions that throw errors', () => {
    const condition = jest.fn(() => {
      throw new Error('Condition error');
    });
    const first = jest.fn();
    const second = jest.fn();

    expect(() => ifElse(condition, first, second)).toThrow('Condition error');
    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });
});
