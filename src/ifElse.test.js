'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let firstCallback;
  let secondCallback;

  beforeEach(() => {
    firstCallback = jest.fn();
    secondCallback = jest.fn();
  });

  it(`should be declared`, () => {
    expect(ifElse)
      .toBeInstanceOf(Function);
  });

  it('should return undefined', () => {
    const condition = () => true;

    expect(ifElse(condition, firstCallback, secondCallback)).toBeUndefined();
  });

  it('should called the first callback if the condition return true', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should called the second callback if the condition return false', () => {
    const condition = jest.fn(() => false);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
    expect(firstCallback).not.toHaveBeenCalled();
  });
});
