'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let condition;
  let first;
  let second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should return undefined', () => {
    expect(ifElse(condition, first, second)).toBeUndefined();
  });

  it('should launch condition callback in any case', () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
  });

  it('should launch first if condition returns true', () => {
    condition = jest.fn(() => true);
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
  });

  it('should launch second if condition returns false', () => {
    condition = jest.fn(() => false);
    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
  });

  it('should not call first and second at the same time', () => {
    condition = jest.fn(() => false);
    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();

    condition = jest.fn(() => true);
    first = jest.fn();
    second = jest.fn();
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });
});
