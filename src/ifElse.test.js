'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should return nothing`, () => {
    const result = ifElse(
      () => true, () => {}, () => {}
    );

    expect(result).toBe();
  });

  it(`should return 'first' if 'condition' is true`, () => {
    const condition = () => true;

    const funcA = jest.fn();
    const funcB = jest.fn();

    ifElse(condition, funcA, funcB);

    expect(funcA).toHaveBeenCalled();
    expect(funcB).not.toHaveBeenCalled();
  });

  it(`should return 'second' if 'condition' is false`, () => {
    const condition = () => false;

    const funcA = jest.fn();
    const funcB = jest.fn();

    ifElse(condition, funcA, funcB);

    expect(funcA).not.toHaveBeenCalled();
    expect(funcB).toHaveBeenCalled();
  });

  it(`should return 'first' only once`, () => {
    const condition = () => true;
    const funcA = jest.fn();

    ifElse(condition, funcA, () => {});

    expect(funcA).toHaveBeenCalledTimes(1);
  });

  it(`should return 'second' only once`, () => {
    const condition = () => false;
    const funcB = jest.fn();

    ifElse(condition, () => {}, funcB);

    expect(funcB).toHaveBeenCalledTimes(1);
  });

  it(`should return 'first' without arguments`, () => {
    const condition = () => true;
    const funcA = jest.fn();

    ifElse(condition, funcA, () => {});

    expect(funcA).toHaveBeenCalledWith();
  });

  it(`should return 'second' without arguments`, () => {
    const condition = () => false;
    const funcB = jest.fn();

    ifElse(condition, () => {}, funcB);

    expect(funcB).toHaveBeenCalledWith();
  });

  it(`should return 'condition' without arguments`, () => {
    const condition = jest.fn(() => false);

    ifElse(condition, () => {}, () => {});

    expect(condition).toHaveBeenCalledWith();
  });
});
