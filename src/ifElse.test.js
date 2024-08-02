'use strict';

describe('ifElse', () => {
  const ifElse = require('./ifElse'); // Правильний імпорт функції

  it('should return undefined', () => {
    expect(ifElse(() => {}, () => {}, () => {})).toBeUndefined();
  });

  it('should call the first callback if condition returns true', () => {
    const firstFn = jest.fn();
    const secondFn = jest.fn();
    const conditionFn = jest.fn(() => true);

    ifElse(conditionFn, firstFn, secondFn);

    expect(firstFn).toHaveBeenCalledTimes(1);
    expect(secondFn).not.toHaveBeenCalled();
  });

  it('should call the second callback if condition returns false', () => {
    const firstFn = jest.fn();
    const secondFn = jest.fn();
    const conditionFn = jest.fn(() => false);

    ifElse(conditionFn, firstFn, secondFn);

    expect(firstFn).not.toHaveBeenCalled();
    expect(secondFn).toHaveBeenCalledTimes(1);
  });
});
