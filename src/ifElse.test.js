'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  let firstMock;
  let secondMock;

  beforeEach(() => {
      firstMock = jest.fn();
      secondMock = jest.fn();
    }
  );

  it('should call the first function when condition returns true', () => {
    const condition = () => true;

    ifElse(condition, firstMock, secondMock);
    expect(firstMock).toHaveBeenCalledTimes(1);
    expect(secondMock).not.toHaveBeenCalled();
  });

  it('should call the second function when condition returns false', () => {
    const condition = () => false;

    ifElse(condition, firstMock, secondMock);

    expect(firstMock).not.toHaveBeenCalled();
    expect(secondMock).toHaveBeenCalled();
  });

  it('should handle dynamic conditions', () => {
    let flag = true;
    const condition = () => flag;

    ifElse(condition, firstMock, secondMock);
    expect(firstMock).toHaveBeenCalled();
    expect(secondMock).not.toHaveBeenCalled();

    // Reset mocks for next check
    firstMock.mockClear();
    secondMock.mockClear();

    flag = false;
    ifElse(condition, firstMock, secondMock);
    expect(firstMock).not.toHaveBeenCalled();
    expect(secondMock).toHaveBeenCalled();
  });

  it('should not return a value', () => {
    const condition = () => true;

    const result = ifElse(condition, firstMock, secondMock);

    expect(result).toBeUndefined();
  });
});
