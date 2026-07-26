'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  test('should call condition callback', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  test('should call first callback if condition is true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  test('should call callbacks without arguments', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledWith();
  });

  test('should return undefined', () => {
    const result = ifElse(
      () => true,
      () => {},
      () => {},
    );

    expect(result).toBeUndefined();
  });
});
