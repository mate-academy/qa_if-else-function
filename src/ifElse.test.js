'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared as a function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(
    'should call the first callback' +
      'and ignore the second when condition returns true',
    () => {
      const conditionMock = jest.fn(() => true);
      const firstMock = jest.fn();
      const secondMock = jest.fn();

      ifElse(conditionMock, firstMock, secondMock);

      expect(conditionMock).toHaveBeenCalledTimes(1);
      expect(firstMock).toHaveBeenCalledTimes(1);
      expect(secondMock).not.toHaveBeenCalled();
    },
  );

  it(
    'should call the second callback' +
      'and ignore the first when condition returns false',
    () => {
      const conditionMock = jest.fn(() => false);
      const firstMock = jest.fn();
      const secondMock = jest.fn();

      ifElse(conditionMock, firstMock, secondMock);

      expect(conditionMock).toHaveBeenCalledTimes(1);
      expect(firstMock).not.toHaveBeenCalled();
      expect(secondMock).toHaveBeenCalledTimes(1);
    },
  );

  it(
    'should not return any value (return undefined)' +
      'regardless of callback results',
    () => {
      const conditionMock = jest.fn(() => true);
      const firstMock = jest.fn(() => 'some data');
      const secondMock = jest.fn();

      const result = ifElse(conditionMock, firstMock, secondMock);

      expect(result).toBeUndefined();
    },
  );

  it('should call all callbacks with no arguments passed to them', () => {
    const conditionMock = jest.fn(() => true);
    const firstMock = jest.fn();
    const secondMock = jest.fn();

    ifElse(conditionMock, firstMock, secondMock);

    expect(conditionMock.mock.calls[0]).toEqual([]);
    expect(firstMock.mock.calls[0]).toEqual([]);
  });
});
