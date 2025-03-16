'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should not return anything', () => {
    const condition = jest.fn();
    const first = jest.fn();
    const second = jest.fn();

    expect(ifElse(condition, first, second))
      .toBeUndefined();
  });

  it('should call condition callback first', () => {
    const condition = jest.fn();
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition)
      .toBeCalled();
  });

  it('should call first callback if condition is true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .toBeCalled();

    expect(second)
      .not.toBeCalled();
  });

  it('should call second callback if condition is false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .not.toBeCalled();

    expect(second)
      .toBeCalled();
  });
});
