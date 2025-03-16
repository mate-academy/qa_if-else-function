'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse)
      .toBeInstanceOf(Function);
  });

  it('should return nothing', () => {
    expect(ifElse(() => true, () => {}, () => {}))
      .toBeUndefined();
  });

  it(`should calls 'condition' callback`, () => {
    const condition = jest.fn(() => true);

    ifElse(condition, () => {}, () => {});

    expect(condition)
      .toBeCalled();
  });

  it(`should calls 'first' callback if condition() === true`, () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .toHaveBeenCalled();

    expect(second)
      .not.toHaveBeenCalled();
  });

  it(`should calls 'second' callback if condition() !== true`, () => {
    const condition = jest.fn().mockReturnValue(false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .not.toHaveBeenCalled();

    expect(second)
      .toHaveBeenCalled();
  });
});
