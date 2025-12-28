'use strict';
/* eslint-disable max-len */

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call the condition function exactly 1 time', () => {
    const condition = jest.fn();
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should call the first function exactly 1 time when condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
  });

  it('should not call second function when condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second function exactly 1 time when condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should not call first function when condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });

  it('should not return anything', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    expect(ifElse(condition, first, second)).toBeUndefined();
  });

  it('should call all the callbacks with no arguments', () => {
    const condition1 = jest.fn(() => false);
    const condition2 = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    expect(ifElse(condition1, first, second)).toBeUndefined();

    expect(condition1).toHaveBeenCalledTimes(1);
    expect(condition1).toHaveBeenCalledWith();
    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();

    expect(ifElse(condition2, first, second)).toBeUndefined();

    expect(condition2).toHaveBeenCalledTimes(1);
    expect(condition2).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
  });
});
