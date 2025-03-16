'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be instance of function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should not return anyting', () => {
    expect(ifElse(() => { }, () => { }, () => { })).toBeUndefined();
  });

  it(`should call 'first' if condition() === true`, () => {
    const condition = jest.fn(() => true);
    const first = jest.fn(() => { });
    const second = jest.fn(() => { });

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it(`should call 'second' if condition() === false`, () => {
    const condition = jest.fn(() => false);
    const first = jest.fn(() => { });
    const second = jest.fn(() => { });

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it(`should call 'second',`
    + `if condition() === anything else, but not true`, () => {
    const condition = jest.fn(() => undefined);
    const first = jest.fn(() => { });
    const second = jest.fn(() => { });

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it(`'condition' should be called`, () => {
    const condition = jest.fn(() => true);

    ifElse(condition, () => {}, () => {});

    expect(condition).toHaveBeenCalled();
  });
});
