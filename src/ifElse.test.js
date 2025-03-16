'use strict';

describe('ifElse', () => {
  // Якщо ifElse знаходиться в окремому файлі, раскоментуй наступний рядок:
  const { ifElse } = require('./ifElse');

  it('should run first callback if condition is true', () => {
    const condition = () => true;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(0);
  });

  it('should run second callback if condition is false', () => {
    const condition = () => false;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(0);
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should throw error if any argument is not a function', () => {
    const invalidCondition = 'not a function';
    const first = jest.fn();
    const second = jest.fn();

    expect(() => {
      ifElse(invalidCondition, first, second);
    }).toThrowError('All arguments must be functions');
  });

  it('should not pass arguments to first or second callbacks', () => {
    const condition = () => true;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });
});
