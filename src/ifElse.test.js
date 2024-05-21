'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  // const { ifElse } = require('./ifElse');

  let conditionMock;
  let firstMock;
  let secondMock;

  beforeEach(() => {
    conditionMock = jest.fn();
    firstMock = jest.fn();
    secondMock = jest.fn();
  });

  it('should call first callback when condition return true', () => {
    conditionMock.mockReturnValue(true);

    ifElse(conditionMock, firstMock, secondMock);

    expect(conditionMock).toHaveBeenCalled();
    expect(firstMock).toHaveBeenCalled();
    expect(secondMock).not.toHaveBeenCalled();
  });

  it('should call second callback when condition return false', () => {
    conditionMock.mockReturnValue(false);

    ifElse(conditionMock, firstMock, secondMock);

    expect(conditionMock).toHaveBeenCalled();
    expect(firstMock).not.toHaveBeenCalled();
    expect(secondMock).toHaveBeenCalled();
  });

  it('should not return any value', () => {
    conditionMock.mockReturnValue(true);

    const result = ifElse(conditionMock, firstMock, secondMock);

    expect(result).toBe(undefined);
  });
});
