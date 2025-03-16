'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  /**
   * @type {jest.Mock}
   */
  let condition;
  /**
   * @type {jest.Mock}
   */
  let first;
  /**
   * @type {jest.Mock}
   */
  let second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should not return anything', () => {
    expect(ifElse(condition, first, second)).toBeUndefined();
  });

  it('should call once only first function if condition is true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should call once only second function if condition false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should call condition once', () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should call condition without arguments', () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
  });

  it('should call first function without arguments', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledWith();
  });

  it('should call second function without arguments', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledWith();
  });
});
