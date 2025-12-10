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

  it('should call the first function when condition is true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second function when condition is false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
  });

  it('should call condition', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should not return anything', () => {
    condition.mockReturnValue(true);

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });

  it('should call first without arguments', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledWith();
  });

  it('should call second without arguments', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledWith();
  });

  it('should call condition without arguments', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
  });
});
