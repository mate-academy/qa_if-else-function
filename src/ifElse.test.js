/** @typedef {import('@types/jest')} */
'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let condition, first, second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should call the "first" callback if "condition" returns true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the "second" callback if "condition" returns false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should call callbacks with no arguments', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(condition.mock.calls[0]).toHaveLength(0);
    expect(first.mock.calls[0]).toHaveLength(0);
  });
});
