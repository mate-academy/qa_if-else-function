'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should run code inside If', () => {
    const mockCondition = jest.fn(() => {
      return true;
    });
    const mockFirst = jest.fn();
    const mockSecond = jest.fn();

    ifElse(mockCondition, mockFirst, mockSecond);
    expect(mockFirst).toHaveBeenCalledTimes(1);
    expect(mockSecond).toHaveBeenCalledTimes(0);
  });

  it('should run code inside Else', () => {
    const mockCondition = jest.fn(() => false);
    const mockFirst = jest.fn();
    const mockSecond = jest.fn();

    ifElse(mockCondition, mockFirst, mockSecond);
    expect(mockFirst).toHaveBeenCalledTimes(0);
    expect(mockSecond).toHaveBeenCalledTimes(1);
  });

  // write tests here
});
