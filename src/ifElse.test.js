'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  let firstMock;
  let secondMock;
  let conditionTrue;
  let conditionFalse;

  beforeEach(() => {
    firstMock = jest.fn();
    secondMock = jest.fn();
    conditionTrue = jest.fn(() => true);
    conditionFalse = jest.fn(() => false);
  });

  it('should call first callback if condition returns true', () => {
    ifElse(conditionTrue, firstMock, secondMock);

    expect(conditionTrue).toHaveBeenCalledTimes(1);
    expect(conditionTrue).toHaveBeenCalledWith();

    expect(firstMock).toHaveBeenCalledTimes(1);
    expect(firstMock).toHaveBeenCalledWith();

    expect(secondMock).not.toHaveBeenCalled();
  });

  it('should call second callback if condition returns false', () => {
    ifElse(conditionFalse, firstMock, secondMock);

    expect(conditionFalse).toHaveBeenCalledTimes(1);
    expect(conditionFalse).toHaveBeenCalledWith();

    expect(secondMock).toHaveBeenCalledTimes(1);
    expect(secondMock).toHaveBeenCalledWith();

    expect(firstMock).not.toHaveBeenCalled();
  });

  it('should work when condition is a dynamic function', () => {
    const dynamicCondition = jest.fn(() => true);

    ifElse(dynamicCondition, firstMock, secondMock);

    expect(dynamicCondition).toHaveBeenCalledTimes(1);
    expect(dynamicCondition).toHaveBeenCalledWith();

    expect(firstMock).toHaveBeenCalledTimes(1);
    expect(firstMock).toHaveBeenCalledWith();

    expect(secondMock).not.toHaveBeenCalled();
  });

  it('should not return any value', () => {
    const result = ifElse(conditionTrue, firstMock, secondMock);

    expect(result).toBeUndefined();
    expect(conditionTrue).toHaveBeenCalledTimes(1);
  });
});

