'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should return undefined', () => {
    expect(ifElse(() => {}, () => {}, () => {})).toBeUndefined();
  });

  it('should call the first callback when condition return true', () => {
    const mockResult = jest.fn().mockReturnValue(true);
    const cb1 = jest.fn();
    const cb2 = jest.fn();

    ifElse(mockResult, cb1, cb2);

    expect(mockResult).toHaveBeenCalled();
    expect(cb1).toHaveBeenCalled();
    expect(cb2).not.toHaveBeenCalled();
  });

  it('should call the second callback when condition return false', () => {
    const mockResult = jest.fn().mockReturnValue(false);
    const cb1 = jest.fn();
    const cb2 = jest.fn();

    ifElse(mockResult, cb1, cb2);

    expect(mockResult).toHaveBeenCalled();
    expect(cb1).not.toHaveBeenCalled();
    expect(cb2).toHaveBeenCalled();
  });
});
