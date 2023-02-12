'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should call a first callback, if condition is true', () => {
    const condition = () => {
      return true;
    };

    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .toHaveBeenCalled();

    expect(second)
      .not.toHaveBeenCalled();
  });

  it('should call a second callback, if condition is false', () => {
    const condition = () => {
      return false;
    };

    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second)
      .toHaveBeenCalled();

    expect(first)
      .not.toHaveBeenCalled();
  });

  it('should return nothing', () => {
    const condition = () => {
      return false;
    };

    const first = jest.fn();
    const second = jest.fn();

    expect(ifElse(condition, first, second))
      .toBeUndefined();
  });
});
