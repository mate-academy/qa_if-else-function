'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should return nothing`, () => {
    const result = ifElse(() => true, () => {}, () => {});

    expect(result).toBe();
  });

  it(`should call only 'first' if 'condition' is true`, () => {
    const condition = () => true;
    const funcA = jest.fn();
    const funcB = jest.fn();

    ifElse(condition, funcA, funcB);

    expect(funcA).toHaveBeenCalled();
    expect(funcB).not.toHaveBeenCalled();
  });

  it(`should call only 'second' if 'condition' is false`, () => {
    const condition = () => false;
    const funcA = jest.fn();
    const funcB = jest.fn();

    ifElse(condition, funcA, funcB);

    expect(funcB).toHaveBeenCalled();
    expect(funcA).not.toHaveBeenCalled();
  });

  it(`should call 'first' only once`, () => {
    const condition = () => true;
    const funcA = jest.fn();

    ifElse(condition, funcA, () => {});

    expect(funcA).toHaveBeenCalledTimes(1);
  });

  it(`should call 'second' only once`, () => {
    const condition = () => false;
    const funcB = jest.fn();

    ifElse(condition, () => {}, funcB);

    expect(funcB).toHaveBeenCalledTimes(1);
  });

  it(`should call 'condition' without arguments`, () => {
    const condition = jest.fn(() => false);

    ifElse(condition, () => {}, () => {});

    expect(condition).toHaveBeenCalledWith();
  });

  it(`should call 'first' without arguments`, () => {
    const condition = () => true;
    const funcA = jest.fn();

    ifElse(condition, funcA, () => {});

    expect(funcA).toHaveBeenCalledWith();
  });

  it(`should call 'second' without arguments`, () => {
    const condition = () => false;
    const funcB = jest.fn();

    ifElse(condition, () => {}, funcB);

    expect(funcB).toHaveBeenCalledWith();
  });
});
