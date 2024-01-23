'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should return undefined', () => {
    expect(ifElse(() => {}, () => {}, () => {})).toBeUndefined();
  });

  it(`should be called 'first' if 'condition' returns 'true'`, () => {
    const firstFn = jest.fn();
    const secondFn = jest.fn();
    const conditionFn = jest.fn(() => Math.random() > 0.5);

    jest.spyOn(Math, 'random')
      .mockImplementation(() => 0.6);

    ifElse(
      conditionFn,
      firstFn,
      secondFn,
    );

    expect(conditionFn).toHaveBeenCalledTimes(1);
    expect(firstFn).toHaveBeenCalledTimes(1);
    expect(secondFn).not.toHaveBeenCalled();
  });

  it(`should be called 'second' if 'condition' returns 'false'`, () => {
    const firstFn = jest.fn();
    const secondFn = jest.fn();
    const conditionFn = jest.fn(() => Math.random() > 0.5);

    jest.spyOn(Math, 'random')
      .mockImplementation(() => 0.4);

    ifElse(
      conditionFn,
      firstFn,
      secondFn,
    );

    expect(conditionFn).toHaveBeenCalledTimes(1);
    expect(firstFn).not.toHaveBeenCalled();
    expect(secondFn).toHaveBeenCalledTimes(1);
  });
});
