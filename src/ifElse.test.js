'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let first;
  let second;
  let condition;

  beforeEach(() => {
    first = jest.fn(() => {});
    second = jest.fn(() => {});
    condition = jest.fn(() => {});
  });

  it(`should be declared`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should not return anything`, () => {
    expect(ifElse(condition, first, second)).toBeUndefined();
  });

  it(`should called first one time if condition === 'true'`, () => {
    condition.mockReturnValueOnce(true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it(`should called second one time if condition === 'false'`, () => {
    condition.mockReturnValueOnce(false);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it(`should called second one time if condition weren't implement`, () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });
});
