'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let condition;
  let first;
  let second;

  beforeEach(() => {
    first = jest.fn();
    second = jest.fn();
  });

  it('should call the first callback if the condition returns true', () => {
    condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second callback if the condition returns false', () => {
    condition = jest.fn(() => false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });

  it('should call 2 cb if condition returns truthy non-boolean val', () => {
    condition = jest.fn(() => 1);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });

  it('should call the condition without args', () => {
    condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition.mock.calls[0].length).toBe(0);
  });

  it('should call the condition exactly once when it returns false', () => {
    condition = jest.fn(() => false);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should call the first callback without args', () => {
    condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(first.mock.calls[0].length).toBe(0);
  });

  it('should call the second callback without args', () => {
    condition = jest.fn(() => false);

    ifElse(condition, first, second);

    expect(second.mock.calls[0].length).toBe(0);
  });
});
