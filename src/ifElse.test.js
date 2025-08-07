'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it(`should call 'first' callback if condition returns true`, () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it(`should call 'second' callback if condition returns false`, () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it(`should not return any value`, () => {
    const result = ifElse(
      () => true,
      () => {},
      () => {}
    );

    expect(result).toBeUndefined();
  });
});
