'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  test('should be declared as a function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  test('should call condition without arguments', () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
  });

  test('should call first when condition returns true', () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  test('should call second when condition returns false', () => {
    const condition = jest.fn().mockReturnValue(false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
  });

  test('should not return a value', () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();
    const second = jest.fn();

    expect(ifElse(condition, first, second)).toBeUndefined();
  });
});
