'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  const firstCallback = jest.fn();
  const secondCallback = jest.fn();

  beforeEach(() => {
    firstCallback.mockClear();
    secondCallback.mockClear();
  });

  it(`should run 'first' callback when `
    + `'condition' is fulfilled`, () => {
    const condition = () => true;

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback)
      .toHaveBeenCalled();

    expect(secondCallback)
      .not.toHaveBeenCalled();
  });

  it(`should run 'second' callback when `
    + `'condition' === false`, () => {
    const condition = () => false;

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback)
      .not.toHaveBeenCalled();

    expect(secondCallback)
      .toHaveBeenCalled();
  });

  it(`shouldn't return any value`, () => {
    const condition = () => true;
    const condition2 = () => 2 > 8;
    const value = ifElse(condition, firstCallback, secondCallback);
    const value2 = ifElse(condition2, firstCallback, secondCallback);

    expect(value)
      .toBe(undefined);

    expect(value2)
      .toBe(undefined);
  });

  it(`shouldn't throw error when `
    + `'first' or 'second' callback doesn't exist`, () => {
    const conditionTrue = () => true;
    const conditionFalse = () => false;

    expect(() => {
      ifElse(conditionTrue, undefined, secondCallback);
    }).not.toThrowError();

    expect(() => {
      ifElse(conditionFalse, firstCallback);
    }).not.toThrowError();

    expect(() => {
      ifElse(conditionTrue, firstCallback);
    }).not.toThrowError();
  });

  it(`should throw error when `
    + `'condition' doesn't exist`, () => {
    expect(() => {
      ifElse(undefined, firstCallback, secondCallback);
    }).toThrowError();
  });

  it(`should react only on 3 callbacks`, () => {
    const condition = () => true;
    const additionalCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback, additionalCallback);

    expect(additionalCallback)
      .not.toHaveBeenCalled();

    expect(() => {
      ifElse(condition, firstCallback, secondCallback, 'additional variable');
    }).not.toThrowError();

    expect(() => {
      ifElse(condition, firstCallback, secondCallback, 45, 'Grzanki',
        () => 'paliwo odrzutowe ' + 21);
    }).not.toThrowError();
  });

  it(`should run 'condition' callback only one time `, () => {
    const condition = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(condition)
      .toHaveBeenCalledTimes(1);
  });

  it(`should run each callback without arguments`, () => {
    const condition = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition)
      .toHaveBeenCalledWith();

    expect(firstCallback)
      .toHaveBeenCalledWith();

    ifElse(condition, firstCallback, secondCallback);

    expect(secondCallback)
      .toHaveBeenCalledWith();
  });
});
