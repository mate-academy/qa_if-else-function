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
    conditionTrue = () => true;
    conditionFalse = () => false;
  });

  it('should call first callback if condition returns true', () => {
    ifElse(conditionTrue, firstMock, secondMock);

    expect(firstMock).toHaveBeenCalled();
    expect(secondMock).not.toHaveBeenCalled();
  });

  it('should call second callback if condition returns false', () => {
    ifElse(conditionFalse, firstMock, secondMock);

    expect(secondMock).toHaveBeenCalled();
    expect(firstMock).not.toHaveBeenCalled();
  });

  it('should work when condition is a dynamic function', () => {
    const dynamicCondition = jest.fn(() => true);
    ifElse(dynamicCondition, firstMock, secondMock);

    expect(dynamicCondition).toHaveBeenCalled();
    expect(firstMock).toHaveBeenCalled();
    expect(secondMock).not.toHaveBeenCalled();
  });

  it('should not return any value', () => {
    const result = ifElse(conditionTrue, firstMock, secondMock);
    expect(result).toBeUndefined();
  });
});

