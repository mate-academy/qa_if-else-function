'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let conditionMock, firstMock, secondMock;

  beforeEach(() => {
    conditionMock = jest.fn();
    firstMock = jest.fn();
    secondMock = jest.fn();
  });

  it(`should be declared`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should not return a value`, () => {
    const result = ifElse(
      () => true,
      () => {},
      () => {}
    );

    expect(result).toBeUndefined();
  });

  it(`should call 'first' function if 'condition' returns true`, () => {
    conditionMock.mockReturnValue(true);

    ifElse(conditionMock, firstMock, secondMock);

    expect(conditionMock).toHaveBeenCalledTimes(1);
    expect(firstMock).toHaveBeenCalledTimes(1);
    expect(secondMock).not.toHaveBeenCalled();
  });

  it(`should call 'second' function if 'condition' returns false`, () => {
    conditionMock.mockReturnValue(false);

    ifElse(conditionMock, firstMock, secondMock);

    expect(conditionMock).toHaveBeenCalledTimes(1);
    expect(firstMock).not.toHaveBeenCalled();
    expect(secondMock).toHaveBeenCalledTimes(1);
  });
});
