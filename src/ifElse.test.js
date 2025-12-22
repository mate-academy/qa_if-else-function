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

  it('should call first if condition returns true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();

    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();

    expect(second).not.toHaveBeenCalled();
  });

  it('should call second if condition returns false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();

    expect(first).not.toHaveBeenCalled();

    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
  });

  it('should call condition without arguments', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
  });

  it('should call callbacks without arguments', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledWith();
  });

  it('should not return any value', () => {
    condition.mockReturnValue(true);

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });
});
