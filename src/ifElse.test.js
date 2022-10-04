'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('is declared', () => {
    expect(ifElse)
      .toBeInstanceOf(Function);
  });

  it('returns nothing', () => {
    expect(ifElse(() => {}, () => {}, () => {}))
      .toBeUndefined();
  });

  it('calls condition fn', () => {
    const condition = jest.fn();

    ifElse(condition, () => {}, () => {});

    expect(condition)
      .toBeCalled();
  });

  it('calls first fn if condition() === true', () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .toBeCalled();

    expect(second)
      .not.toBeCalled();
  });

  it('calls second fn if condition() !== true', () => {
    const condition = jest.fn().mockReturnValue(false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .not.toBeCalled();

    expect(second)
      .toBeCalled();
  });
});
