'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should run first function if condition is true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn(() => 'first');
    const second = jest.fn(() => 'second');

    ifElse(condition, first, second);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should run second function if condition is false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn(() => 'first');
    const second = jest.fn(() => 'second');

    ifElse(condition, first, second);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  // write tests here
});
