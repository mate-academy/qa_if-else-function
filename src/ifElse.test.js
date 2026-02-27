'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('calls first when condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();
    const result = ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });

  it('calls second when condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
    expect(result).toBeUndefined();
  });
});
