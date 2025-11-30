'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let first;
  let second;

  beforeEach(() => {
    first = jest.fn();
    second = jest.fn();
  });

  it('should execute 1st callback if condition is true', () => {
    const condition = jest.fn(() => {
      return true;
    });

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledWith();
  });

  it('ifElse function should returns undefined', () => {
    const condition = () => {
      return true;
    };

    ifElse(condition, first, second);

    expect(ifElse(condition, first, second)).toBeUndefined();
  });

  it('should not execute 2nd callback if condition is true', () => {
    const condition = jest.fn(() => {
      return true;
    });

    ifElse(condition, first, second);

    expect(second).not.toHaveBeenCalled();
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledWith();
  });

  it('should execute 2nd callback if condition is false', () => {
    const condition = jest.fn(() => {
      return false;
    });

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
    expect(condition).toHaveBeenCalledWith();
    expect(second).toHaveBeenCalledWith();
  });

  it('should not execute 1st callback if condition is false', () => {
    const condition = jest.fn(() => {
      return false;
    });

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(condition).toHaveBeenCalledWith();
    expect(second).toHaveBeenCalledWith();
  });
});
