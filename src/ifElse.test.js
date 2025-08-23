'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let firstMock;
  let secondMock;

  beforeEach(() => {
    firstMock = jest.fn(() => 'first');
    secondMock = jest.fn(() => 'second');
  });

  it('calls the ifElse return nothing', () => {
    const conditionMock = jest.fn(() => true);

    expect(ifElse(conditionMock, firstMock, secondMock)).toBeUndefined();
  });

  it('functions takes three arguments', () => {
    expect(ifElse.length).toBe(3);
  });

  it('calls first callback if condition is true', () => {
    const conditionMock = jest.fn(() => true);

    ifElse(conditionMock, firstMock, secondMock);

    expect(firstMock).toHaveBeenCalled();
    expect(secondMock).not.toHaveBeenCalled();
  });

  it('calls second callback if condition is false', () => {
    const conditionMock = jest.fn(() => false);

    ifElse(conditionMock, firstMock, secondMock);

    expect(firstMock).not.toHaveBeenCalled();
    expect(secondMock).toHaveBeenCalled();
  });

  it('is called exactly once per invocation', () => {
    const conditionMock = jest.fn(() => true);

    ifElse(conditionMock, firstMock, secondMock);

    expect(conditionMock).toHaveBeenCalledTimes(1);
  });

  it('that no arguments are passed to any callback', () => {
    const conditionMock = jest.fn(() => true);

    ifElse(conditionMock, firstMock, secondMock);

    expect(conditionMock).toHaveBeenCalledWith();
    expect(firstMock).toHaveBeenCalledWith();
    expect(secondMock).not.toHaveBeenCalled();
  });

  it('does not throw when condition returns a boolean', () => {
    const conditionMock = jest.fn(() => true);

    expect(() => ifElse(conditionMock, firstMock, secondMock)).not.toThrow();
  });
});
