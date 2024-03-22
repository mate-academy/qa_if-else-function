'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let firstCallback;
  let secondCallback;
  let condition;

  beforeEach(() => {
    firstCallback = jest.fn();
    secondCallback = jest.fn();
    condition = jest.fn();
  });

  afterEach(() => {
    firstCallback.mockClear();
    secondCallback.mockClear();
    condition.mockClear();
  });

  it('should call condition 1 time', () => {
    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should call firstCallback if comdition return - true', () => {
    condition = condition
      .mockReturnValueOnce(true);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call firstCallback once if comdition return - true', () => {
    condition = condition
      .mockReturnValueOnce(true);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalledTimes(1);
  });

  it('should call secondCallback if comdition return - false', () => {
    condition = condition
      .mockReturnValueOnce(false);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  it('should call secondCallback once if comdition return - false', () => {
    condition = condition
      .mockReturnValueOnce(false);

    ifElse(condition, firstCallback, secondCallback);

    expect(secondCallback).toHaveBeenCalledTimes(1);
  });
});
