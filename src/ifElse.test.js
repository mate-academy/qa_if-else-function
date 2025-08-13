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

  it('should function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`when 'condition()' is true'`, () => {
    mockCondition.mockReturnValue(true);

    ifElse(mockCondition, mockFirst, mockSecond);

    expect(mockCondition).toHaveBeenCalledTimes(1);
    expect(mockCondition).toHaveBeenCalledWith();
    expect(mockFirst).toHaveBeenCalledWith();
    expect(mockSecond).not.toHaveBeenCalled();
  });

  it(`when 'condition()' is false`, () => {
    mockCondition.mockReturnValue(false);

    ifElse(mockCondition, mockFirst, mockSecond);

    expect(mockCondition).toHaveBeenCalledTimes(1);
    expect(mockCondition).toHaveBeenCalledWith();
    expect(mockSecond).toHaveBeenCalledWith();
    expect(mockFirst).not.toHaveBeenCalled();
  });

  it(`'ifElse' always returns undefined when 'condition()' is true `, () => {
    mockCondition.mockReturnValue(true);

    expect(ifElse(mockCondition, mockFirst, mockSecond)).toBeUndefined();
  });

  it(`'ifElse' always returns undefined when 'condition()' is false`, () => {
    mockCondition.mockReturnValue(false);

    expect(ifElse(mockCondition, mockFirst, mockSecond)).toBeUndefined();
  });
});
