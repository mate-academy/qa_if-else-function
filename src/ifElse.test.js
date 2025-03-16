'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  let mockFirst;
  let mockSecond;

  beforeEach(() => {
    mockFirst = jest.fn();
    mockSecond = jest.fn();
  });

  it('should call first callback when condition returns true', () => {
    const mockCondition = jest.fn(() => true);

    ifElse(mockCondition, mockFirst, mockSecond);
    expect(mockCondition).toHaveBeenCalledTimes(1);
    expect(mockFirst).toHaveBeenCalledTimes(1);
    expect(mockSecond).not.toHaveBeenCalled();
  });

  it('should call second callback when condition returns false', () => {
    const mockCondition = jest.fn(() => false);

    ifElse(mockCondition, mockFirst, mockSecond);
    expect(mockCondition).toHaveBeenCalledTimes(1);
    expect(mockFirst).not.toHaveBeenCalled();
    expect(mockSecond).toHaveBeenCalledTimes(1);
  });

  it('should work with actual functions instead of mocks', () => {
    let result = '';

    ifElse(
      () => true,
      () => {
        result = 'first';
      },
      () => {
        result = 'second';
      }
    );
    expect(result).toBe('first');

    ifElse(
      () => false,
      () => {
        result = 'first';
      },
      () => {
        result = 'second';
      }
    );
    expect(result).toBe('second');
  });

  it('should call condition without arguments', () => {
    const mockCondition = jest.fn(() => true);

    ifElse(mockCondition, mockFirst, mockSecond);
    expect(mockCondition).toHaveBeenCalledWith();
  });

  it('should call first or second callback without arguments', () => {
    ifElse(() => true, mockFirst, mockSecond);
    expect(mockFirst).toHaveBeenCalledWith();

    ifElse(() => false, mockFirst, mockSecond);
    expect(mockSecond).toHaveBeenCalledWith();
  });
});
