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

  it('should call `condition` with no arguments', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
  });

  it('should call `first` with no arguments if `condition` is true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledWith();
  });

  it('should not call `second` if `condition` is true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(second).not.toHaveBeenCalled();
  });

  it('should call `second` with no arguments if `condition` is false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledWith();
  });

  it('should not call `first` if `condition` is false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
  });

  it('should not return any result', () => {
    condition.mockReturnValue(true);

    expect(ifElse(condition, first, second)).toBeUndefined();
  });
});
