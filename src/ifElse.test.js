'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  let condition;
  let first;
  let second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should call condition once with no arguments', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
  });

  it('should call first callback when condition is true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second callback when condition is false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
  });

  it('should call second callback when condition returns non-true', () => {
    condition.mockReturnValue(0);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });

  it('should return undefined regardless of condition', () => {
    first.mockReturnValue('result 1');
    second.mockReturnValue('result 2');

    condition.mockReturnValue(true);
    expect(ifElse(condition, first, second)).toBeUndefined();

    condition.mockReturnValue(false);
    expect(ifElse(condition, first, second)).toBeUndefined();
  });
});
