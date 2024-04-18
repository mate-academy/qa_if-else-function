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
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should run 'first' callback `
  + `if 'condition' callback returns 'true'`, () => {
    const conditionCallback = jest.fn().mockReturnValue(true);

    ifElse(conditionCallback, firstCallback, secondCallback);

    expect(conditionCallback).toHaveBeenCalled();
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it(`should run 'second' callback `
  + `if 'condition' callback returns 'false'`, () => {
    const conditionCallback = jest.fn().mockReturnValue(false);

    ifElse(conditionCallback, firstCallback, secondCallback);

    expect(conditionCallback).toHaveBeenCalled();
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  it(`should run 'condition' callback with no arguments`, () => {
    const conditionCallback = jest.fn();

    ifElse(conditionCallback, firstCallback, secondCallback);

    expect(conditionCallback).toHaveBeenCalledWith();
  });

  it(`should run 'first' callback with no arguments`, () => {
    const conditionCallback = jest.fn().mockReturnValue(true);

    ifElse(conditionCallback, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalledWith();
  });

  it(`should run 'second' callback with no arguments`, () => {
    const conditionCallback = jest.fn().mockReturnValue(false);

    ifElse(conditionCallback, firstCallback, secondCallback);

    expect(secondCallback).toHaveBeenCalledWith();
  });
});
