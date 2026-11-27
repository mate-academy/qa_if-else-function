'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared ', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call first call back if condition is true ', () => {
    const first = jest.fn();

    const second = jest.fn();

    const condition = jest.fn(() => true);

    ifElse(condition, first, second);
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
    expect(condition).toHaveBeenCalledWith();
    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should call second call back if condition is false ', () => {
    const first = jest.fn();

    const second = jest.fn();

    const condition = jest.fn(() => false);

    ifElse(condition, first, second);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
    expect(second).toHaveBeenCalledWith();
    expect(condition).toHaveBeenCalledTimes(1);
  });
});
