'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let conditionTrue;
  let conditionFalse;
  let first;
  let second;

  beforeEach(() => {
    conditionTrue = jest.fn(() => true);
    conditionFalse = jest.fn(() => false);
    first = jest.fn();
    second = jest.fn();
  });

  afterEach(() => {
    conditionTrue.mockClear();
    conditionFalse.mockClear();
    first.mockClear();
    second.mockClear();
  });

  it(`shouldn't return nothing`, () => {
    expect(ifElse(conditionTrue, first, second)).toBeUndefined();
  });

  it('should call first if condistion returns true', () => {
    ifElse(conditionTrue, first, second);

    expect(conditionTrue).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second if condition returns false', () => {
    ifElse(conditionFalse, first, second);

    expect(conditionFalse).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });
});
