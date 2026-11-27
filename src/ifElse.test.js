'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');


  it('should calls f with no arguments if condition is true', () => {
    const f = jest.fn();
    const g = jest.fn();
    ifElse(
      () => true,
      f,
      g,
    );

    expect(f).toHaveBeenCalledTimes(1);
    expect(f).toHaveBeenCalledWith();
    expect(g).not.toHaveBeenCalled();
  });

  it('should calls g with no arguments if condition is false', () => {
    const f = jest.fn();
    const g = jest.fn();

    ifElse(() => false, f, g);

    expect(g).toHaveBeenCalledTimes(1);
    expect(g).toHaveBeenCalledWith();
    expect(f).not.toHaveBeenCalled();
  });

  it('should return undefined', () => {
    const result = ifElse(
      () => true,
      () => 1,
      () => 2,
    );

    expect(result).toBeUndefined();
  });

  it('should return undefined when condition is false', () => {
    const result = ifElse(
      () => false,
      () => 1,
      () => 2,
    );

    expect(result).toBeUndefined();
  });

  it('should call condition with no arguments', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, () => {}, () => {});

    expect(condition).toHaveBeenCalledWith();
  });
});
