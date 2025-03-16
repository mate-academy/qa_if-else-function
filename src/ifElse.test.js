'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be a function', () => {
    expect(ifElse)
      .toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
    const result = ifElse(() => true, () => {}, () => {});

    expect(result)
      .toBeUndefined();
  });

  it(`should call 'first' callback if 'condition' callback return true`, () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .toHaveBeenCalled();

    expect(second)
      .not.toHaveBeenCalled();
  });

  it(`should call 'second' callback if`
    + `'condition' callback return false`, () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second)
      .toHaveBeenCalled();

    expect(first)
      .not.toHaveBeenCalled();
  });
});
