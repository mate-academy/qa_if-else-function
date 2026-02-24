'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let first;
  let second;

  beforeEach(() => {
    first = jest.fn();
    second = jest.fn();
  });

  test('should return undefined', () => {
    const condition = () => true;
    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });

  test('should call first when condition is true', () => {
    const condition = () => true;

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  test('should call second when condition is false', () => {
    const condition = () => false;

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });

  test('should call second when condition returns non-true value', () => {
    const condition = () => 'true';

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });
});
