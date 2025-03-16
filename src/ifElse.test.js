'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should run "first" cb one time for "true"', () => {
    const first = jest.fn();
    const second = jest.fn();
    const condition = () => {
      return true;
    };

    ifElse(condition, first, second);
    expect(first).toHaveBeenCalledTimes(1);
  });

  it('should not run "second" cb for "true"', () => {
    const first = jest.fn();
    const second = jest.fn();
    const condition = () => {
      return true;
    };

    ifElse(condition, first, second);
    expect(second).not.toHaveBeenCalled();
  });

  it('should run "second" cb one time for "false"', () => {
    const first = jest.fn();
    const second = jest.fn();
    const condition = () => {
      return false;
    };

    ifElse(condition, first, second);
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should not run "first" cb for "false"', () => {
    const first = jest.fn();
    const second = jest.fn();
    const condition = () => {
      return false;
    };

    ifElse(condition, first, second);
    expect(first).not.toHaveBeenCalled();
  });

  it('should return "undefined"', () => {
    const first = jest.fn();
    const second = jest.fn();
    const condition = () => {
      return false;
    };

    expect(ifElse(condition, first, second)).toBeUndefined();
  });
});
