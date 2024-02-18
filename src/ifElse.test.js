'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should return undefined', () => {
    expect(ifElse(() => {}, () => {}, () => {})).toBeUndefined();
  });

  it('should call first callback if condition callback returns "true"', () => {
    const firstFn = jest.fn();
    const secondFn = jest.fn();
    const conditionFn = jest.fn(() => true);

    ifElse(conditionFn, firstFn, secondFn);

    expect(firstFn).toHaveBeenCalledTimes(1);
    expect(secondFn).not.toHaveBeenCalled();
  });

  // eslint-disable-next-line max-len
  it('should call second callback if condition callback returns "false"', () => {
    const firstFn = jest.fn();
    const secondFn = jest.fn();
    const conditionFn = jest.fn(() => false);

    ifElse(conditionFn, firstFn, secondFn);

    expect(firstFn).not.toHaveBeenCalled();
    expect(secondFn).toHaveBeenCalledTimes(1);
  });
});
