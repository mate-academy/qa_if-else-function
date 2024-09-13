'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  const mocks = {};

  beforeEach(() => {
    mocks.condition = jest.fn();
    mocks.first = jest.fn();
    mocks.second = jest.fn();
  });

  afterEach(() => {
    delete mocks.condition;
    delete mocks.first;
    delete mocks.second;
  });

  it('should be declared', () => {
    expect(ifElse).toBeDefined();
  });

  it(`should return 'undefined'`, () => {
    const result = ifElse(mocks.condition, mocks.first, mocks.second);

    expect(result).toBeUndefined();
  });

  it(`should call 'condition' one time`, () => {
    ifElse(mocks.condition, mocks.first, mocks.second);

    expect(mocks.condition).toHaveBeenCalledTimes(1);
  });

  it(`should call 'first' one time if 'condition' returns 'true'`, () => {
    mocks.condition.mockReturnValue(true);
    ifElse(mocks.condition, mocks.first, mocks.second);

    expect(mocks.first).toHaveBeenCalledTimes(1);
  });

  it(`should call 'second' one time if 'condition' returns 'false'`, () => {
    mocks.condition.mockReturnValue(false);
    ifElse(mocks.condition, mocks.first, mocks.second);

    expect(mocks.second).toHaveBeenCalledTimes(1);
  });

  it(`should not call 'first' if 'condition' returns 'false'`, () => {
    mocks.condition.mockReturnValue(false);
    ifElse(mocks.condition, mocks.first, mocks.second);

    expect(mocks.first).not.toHaveBeenCalled();
  });

  it(`should not call 'second' if 'condition' returns 'true'`, () => {
    mocks.condition.mockReturnValue(true);
    ifElse(mocks.condition, mocks.first, mocks.second);

    expect(mocks.second).not.toHaveBeenCalled();
  });
});
