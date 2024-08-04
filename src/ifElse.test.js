'use strict';

describe('ifElse', () => {
  const ifElse = require('./ifElse'); 

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

  // Додаткові тести

  it('should call condition callback only once', () => {
    const conditionFn = jest.fn(() => true);
    const firstFn = jest.fn();
    const secondFn = jest.fn();

    ifElse(conditionFn, firstFn, secondFn);

    expect(conditionFn).toHaveBeenCalledTimes(1);
  });

  it('should handle condition callback that throws an error', () => {
    const conditionFn = jest.fn(() => {
      throw new Error('Test error');
    });
    const firstFn = jest.fn();
    const secondFn = jest.fn();

    expect(() => ifElse(conditionFn, firstFn, secondFn)).toThrow('Test error');
    expect(firstFn).not.toHaveBeenCalled();
    expect(secondFn).not.toHaveBeenCalled();
  });

  it('should handle first callback that throws an error', () => {
    const conditionFn = jest.fn(() => true);
    const firstFn = jest.fn(() => {
      throw new Error('Test error');
    });
    const secondFn = jest.fn();

    expect(() => ifElse(conditionFn, firstFn, secondFn)).toThrow('Test error');
    expect(firstFn).toHaveBeenCalled();
    expect(secondFn).not.toHaveBeenCalled();
  });

  it('should handle second callback that throws an error', () => {
    const conditionFn = jest.fn(() => false);
    const firstFn = jest.fn();
    const secondFn = jest.fn(() => {
      throw new Error('Test error');
    });

    expect(() => ifElse(conditionFn, firstFn, secondFn)).toThrow('Test error');
    expect(firstFn).not.toHaveBeenCalled();
    expect(secondFn).toHaveBeenCalled();
  });

  it('should handle different types of condition results', () => {
    const firstFn = jest.fn();
    const secondFn = jest.fn();

    ifElse(() => 'string', firstFn, secondFn);
    expect(firstFn).not.toHaveBeenCalled();
    expect(secondFn).toHaveBeenCalledTimes(1);

    ifElse(() => 0, firstFn, secondFn);
    expect(firstFn).not.toHaveBeenCalled();
    expect(secondFn).toHaveBeenCalledTimes(2);

    ifElse(() => {}, firstFn, secondFn);
    expect(firstFn).not.toHaveBeenCalled();
    expect(secondFn).toHaveBeenCalledTimes(3);

    ifElse(() => true, firstFn, secondFn);
    expect(firstFn).toHaveBeenCalledTimes(1);
    expect(secondFn).toHaveBeenCalledTimes(3);
  });
});
