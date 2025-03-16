'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('ifElse function should return undefined', () => {
    const condition = jest.fn();
    const first = jest.fn();
    const second = jest.fn();

    expect(ifElse(condition, first, second)).toBeUndefined();
  });

  it('should run a first callback if condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(first).toBeCalledWith();
    expect(second).not.toBeCalled();
  });

  it('should run a second callback if condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
    expect(second).toBeCalledWith();
    expect(first).not.toBeCalled();
  });

  it('condition callback should run without arguments', () => {
    const condition = jest.fn();
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(condition).toHaveBeenCalledWith();
  });
});
