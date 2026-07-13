'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let first;
  let second;

  beforeEach(() => {
    first = jest.fn();
    second = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`should be declared`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call `first` cb if condition returns `true`', () => {
    ifElse(() => true, first, second);

    expect(first).toHaveBeenCalled();
  });

  it('should not call `second` cb if condition returns `true`', () => {
    ifElse(() => true, first, second);

    expect(second).not.toHaveBeenCalled();
  });

  it('should call `second` cb if condition returns `false`', () => {
    ifElse(() => false, first, second);

    expect(second).toHaveBeenCalled();
  });

  it('should not call `first` cb if condition returns `false`', () => {
    ifElse(() => false, first, second);

    expect(first).not.toHaveBeenCalled();
  });

  it('should call `condition` cb', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
  });

  it('should call `condition` with no arguments', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
  });

  it('should call `first` with no arguments', () => {
    ifElse(() => true, first, second);

    expect(first).toHaveBeenCalledWith();
  });

  it('should call `second` with no arguments', () => {
    ifElse(() => false, first, second);

    expect(second).toHaveBeenCalledWith();
  });

  it('should call `first` only once', () => {
    ifElse(() => true, first, second);

    expect(first).toHaveBeenCalledTimes(1);
  });

  it('should call `second` only once', () => {
    ifElse(() => false, first, second);

    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should call each cb no more than once per invocation', () => {
    ifElse(() => true, first, second);
    ifElse(() => false, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should return `undefined`', () => {
    const result = ifElse(() => true, first, second);

    expect(result).toBeUndefined();
  });
});
