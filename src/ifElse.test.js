'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let mockCondition;
  let mockFirst;
  let mockSecond;

  beforeEach(() => {
    mockCondition = jest.fn();
    mockFirst = jest.fn();
    mockSecond = jest.fn();
  });

  it(`should be declared`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`shouldn't return anything`, () => {
    const result = ifElse(mockCondition, mockFirst, mockSecond);

    expect(result).toBeUndefined();
  });

  it(`should invoke 'condition' callback`, () => {
    ifElse(mockCondition, mockFirst, mockSecond);

    expect(mockCondition).toHaveBeenCalled();
  });

  it(`should invoke the 'first' callback if`
  + ` 'condition' is true`, () => {
    mockCondition = jest.fn(() => 2 > 1);

    ifElse(mockCondition, mockFirst, mockSecond);

    expect(mockFirst).toHaveBeenCalled();
  });

  it(`should invoke the 'second' callback if`
  + ` 'condition' is false`, () => {
    mockCondition = jest.fn().mockReturnValue(false);

    ifElse(mockCondition, mockFirst, mockSecond);

    expect(mockSecond).toHaveBeenCalled();
  });
});
