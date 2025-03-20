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

  it('should call the first callback when the condition is true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call the second callback when the condition is false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  it('should handle different condition return values', () => {
    condition.mockReturnValue(true);
    ifElse(condition, firstCallback, secondCallback);
    expect(firstCallback).toHaveBeenCalledTimes(1);
    firstCallback.mockClear();

    condition.mockReturnValue(false);
    ifElse(condition, firstCallback, secondCallback);
    expect(secondCallback).toHaveBeenCalledTimes(1);
    secondCallback.mockClear();

    condition.mockReturnValue('test');
    ifElse(condition, firstCallback, secondCallback);
    expect(secondCallback).toHaveBeenCalledTimes(1);
    secondCallback.mockClear();

    condition.mockReturnValue('');
    ifElse(condition, firstCallback, secondCallback);
    expect(secondCallback).toHaveBeenCalledTimes(1);
    secondCallback.mockClear();

    condition.mockReturnValue(null);
    ifElse(condition, firstCallback, secondCallback);
    expect(secondCallback).toHaveBeenCalledTimes(1);
    secondCallback.mockClear();

    condition.mockReturnValue(undefined);
    ifElse(condition, firstCallback, secondCallback);
    expect(secondCallback).toHaveBeenCalledTimes(1);
    secondCallback.mockClear();
  });

  it('should call condition with no arguments', () => {
    condition.mockReturnValue();

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalledWith();
  });
});
