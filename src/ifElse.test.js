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

  it('calls first callback if condition is false', () => {
    const conditionMock = jest.fn(() => false);

    ifElse(conditionMock, firstMock, secondMock);

    expect(firstMock).not.toHaveBeenCalled();
    expect(secondMock).toHaveBeenCalled();
  });

  // write tests here
});
