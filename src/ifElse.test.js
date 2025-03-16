'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be defined', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should not return any result', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    expect(ifElse(condition, first, second)).toBeUndefined();
  });

  it(`should run 'first' function in case condition returns true`, () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
  });

  it(`should not run 'second' function`
    + `in case 'condition' returns true`, () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).not.toHaveBeenCalled();
  });

  it(`should run 'second' function in case condition returns false`, () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
  });

  it(`should not run 'first' function`
    + `in case 'condition' returns false`, () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
  });

  it(`should run function 'condition' and 'second' with no arguments`
    + `if 'condition' returns false`, () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
    expect(second).toHaveBeenCalledWith();
  });

  it(`should run function 'condition' and 'first' with no arguments`
  + `if 'condition' returns true`, () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledWith();
  });
});
