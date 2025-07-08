'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let firstMock;
  let secondMock;

  beforeEach(() => {
    firstMock = jest.fn();
    secondMock = jest.fn();
  }
  );

  it('should be instance of function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call first if condition is true', () => {
    const condition = () => true;

    ifElse(condition, firstMock, secondMock);
    expect(firstMock).toHaveBeenCalled();
    expect(secondMock).not.toHaveBeenCalled();
  });

  it('should call second if condition false', () => {
    const condition = () => false;

    ifElse(condition, firstMock, secondMock);
    expect(secondMock).toHaveBeenCalled();
    expect(firstMock).not.toHaveBeenCalled();
  });

  it('shuld work dynamicly', () => {
    let trigg = true;
    const condition = () => trigg;

    ifElse(condition, firstMock, secondMock);
    expect(firstMock).toHaveBeenCalled();
    expect(secondMock).not.toHaveBeenCalled();

    firstMock.mockClear();
    secondMock.mockClear();

    trigg = false;

    ifElse(condition, firstMock, secondMock);
    expect(secondMock).toHaveBeenCalled();
    expect(firstMock).not.toHaveBeenCalled();
  });

  it('not return value at least', () => {
    const condition = () => false;

    expect(ifElse(condition, firstMock, secondMock)).toBe(undefined);
  });
});
