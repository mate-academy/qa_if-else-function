'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  const conditionTrueMock = jest.fn(() => true);
  const conditionFalseMock = jest.fn(() => false);

  let firstCallbackMock;
  let secondCallbackMock;

  beforeEach(() => {
    firstCallbackMock = jest.fn();
    secondCallbackMock = jest.fn();
  });

  afterEach(() => {
    firstCallbackMock.mockReset();
    secondCallbackMock.mockReset();
  });

  it('should call the first callback if condition returns true', () => {
    ifElse(conditionTrueMock, firstCallbackMock, secondCallbackMock);

    expect(conditionTrueMock).toHaveBeenCalled();
    expect(firstCallbackMock).toHaveBeenCalled();
    expect(secondCallbackMock).not.toHaveBeenCalled();
  });

  it('should call the second callback if condition returns false', () => {
    ifElse(conditionFalseMock, firstCallbackMock, secondCallbackMock);

    expect(conditionFalseMock).toHaveBeenCalled();
    expect(firstCallbackMock).not.toHaveBeenCalled();
    expect(secondCallbackMock).toHaveBeenCalled();
  });
});
