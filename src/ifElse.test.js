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

  it('should be function', () => {
    expect(typeof ifElse).toBe('function');
  });

  it(`should call 'first' if 'condition' returns true`, () => {
    condition.mockReturnValue(true);
    ifElse(condition, first, second);
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it(`should call 'second' if 'condition' returns false`, () => {
    condition.mockReturnValue(false);
    ifElse(condition, first, second);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });
});
