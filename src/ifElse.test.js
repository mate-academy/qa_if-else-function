'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should run first callback if condition = true', () => {
    const condition = () => {
      return true;
    };
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .toBeCalled();
  });

  it('should run second callback if condition = false', () => {
    const condition = () => {
      return false;
    };
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toBeCalled();
    expect(second).toBeCalled();
  });

  it('should return nothing', () => {
    const condition = () => {
      return false;
    };
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(ifElse(condition, first, second))
      .toBeUndefined();
  });
});
