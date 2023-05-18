'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should be declared', () => {
    expect(ifElse)
      .toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
    const condition = jest.fn();
    const first = jest.fn();
    const second = jest.fn();

    expect(ifElse(condition, first, second))
      .toBeUndefined();
  });

  it('should call condition first', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition)
      .toBeCalled();
  });

  it('should call first callback if condition is true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .toHaveBeenCalled();

    expect(second)
      .not.toHaveBeenCalled();
  });

  it('should call second callback if condition is false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second)
      .toHaveBeenCalled();

    expect(first)
      .not.toHaveBeenCalled();
  });
});
