'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let condition;
  let first;
  let second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call first once when condition is true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second once when condition is false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);
    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });

  it('should call only one of first or second', () => {
    condition.mockReturnValue(true);
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();

    condition.mockReturnValue(false);
    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
  });

  it('should call condition function once', () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should throw if first throws when condition is true', () => {
    condition.mockReturnValue(true);

    first.mockImplementation(() => {
      throw new Error('fail first');
    });

    expect(() => ifElse(condition, first, second)).toThrow('fail first');
  });
});
