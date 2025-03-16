'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it(`should be declared and be an instance of function`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  let firstCallback;
  let secondCallback;

  beforeEach(() => {
    firstCallback = jest.fn();
    secondCallback = jest.fn();
  });

  afterEach(() => {
    firstCallback.mockReset();
    secondCallback.mockReset();
  });

  it('should run the first callback if condition returns true', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should run the second callback if condition returns false', () => {
    const condition = jest.fn(() => false);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
