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

  it('does not return anything from the function', () => {
    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });

  it('evaluates the condition exactly once and with no arguments', () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
  });

  // eslint-disable-next-line max-len
  it('executes the "first" callback when condition returns true (with no args)', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  // eslint-disable-next-line max-len
  it('executes the "second" callback when condition returns false (with no args)', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
  });
});
