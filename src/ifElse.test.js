'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be a function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
    const condition = () => {
      return true;
    };
    const cb1 = jest.fn();
    const cb2 = jest.fn();

    expect(ifElse(condition, cb1, cb2)).toBeUndefined();
  });

  it('should run first callback if condition is true', () => {
    const condition = () => {
      return true;
    };
    const cb1 = jest.fn();
    const cb2 = jest.fn();

    ifElse(condition, cb1, cb2);

    expect(cb1).toHaveBeenCalled();
    expect(cb2).not.toHaveBeenCalled();
  });

  it('should run second callback if condition is false', () => {
    const condition = () => {
      return false;
    };
    const cb1 = jest.fn();
    const cb2 = jest.fn();

    ifElse(condition, cb1, cb2);

    expect(cb2).toHaveBeenCalled();
    expect(cb1).not.toHaveBeenCalled();
  });
});
