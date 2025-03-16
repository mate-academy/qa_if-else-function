'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let first = () => {};
  let second = () => {};

  beforeEach(() => {
    first = jest.fn();
    second = jest.fn();
  });

  afterEach(() => {
    first = () => {};

    second = () => {};
  });

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should run 'first' callback if condition returns 'true'`, () => {
    const condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it(`should run 'second' callback if condition returns 'false'`, () => {
    const condition = jest.fn(() => false);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should return undefined', () => {
    const condition = jest.fn(() => false);

    expect(ifElse(condition, first, second)).toBeUndefined();
  });
});
