'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let firstMock, secondMock, conditionMock;

  beforeEach(() => {
    firstMock = jest.fn();
    secondMock = jest.fn();
    conditionMock = jest.fn();
  });

  it('should call the first callback if condition returns true', () => {
    conditionMock.mockReturnValue(true);

    ifElse(conditionMock, firstMock, secondMock);

    expect(conditionMock).toHaveBeenCalled();
    expect(firstMock).toHaveBeenCalled();
    expect(secondMock).not.toHaveBeenCalled();
  });

  it('should call the second callback if condition returns false', () => {
    conditionMock.mockReturnValue(false);

    ifElse(conditionMock, firstMock, secondMock);

    expect(conditionMock).toHaveBeenCalled();
    expect(firstMock).not.toHaveBeenCalled();
    expect(secondMock).toHaveBeenCalled();
  });

  it(
    'should call the second callback if condition returns a falsy value',
    () => {
      conditionMock.mockReturnValue(undefined);

      ifElse(conditionMock, firstMock, secondMock);

      expect(conditionMock).toHaveBeenCalled();
      expect(firstMock).not.toHaveBeenCalled();
      expect(secondMock).toHaveBeenCalled();
    });
});
