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

  it(`should return 'undefined'`, () => {
    expect(ifElse(condition, first, second)).toBeUndefined();
  });

  it(`should run 'condition' with no arguments`, () => {
    ifElse(condition, first, second);

    expect(condition.mock.calls[0]).toHaveLength(0);
  });

  it(`should run 'first' callback with no arguments`, () => {
    ifElse(condition.mockReturnValue(true), first, second);

    expect(first).toHaveBeenCalled();
    expect(first.mock.calls[0]).toHaveLength(0);
    expect(second).not.toHaveBeenCalled();
  });

  it(`should run 'second' callback with no arguments`, () => {
    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
    expect(second.mock.calls[0]).toHaveLength(0);
  });
});
