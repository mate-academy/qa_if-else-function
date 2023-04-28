'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it(`should be declared`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should run a first callback if condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .toHaveBeenCalled();
  });

  it('should not run a second callback if condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second)
      .not.toHaveBeenCalled();
  });

  it('should run a second callback if condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second)
      .toHaveBeenCalled();
  });

  it('should not run a first callback if condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .not.toHaveBeenCalled();
  });
});
