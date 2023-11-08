'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let firstCb;
  let secondCb;
  let condition;

  beforeEach(() => {
    firstCb = jest.fn();
    secondCb = jest.fn();
    condition = jest.fn();
  });

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should return undefined', () => {
    expect(ifElse(condition, firstCb, secondCb)).toBeUndefined();
  });

  it('should launch condition cb in any case', () => {
    ifElse(condition, firstCb, secondCb);

    expect(condition).toHaveBeenCalled();
  });

  it('should run first Cb if condition is true', () => {
    condition = jest.fn(() => true);

    ifElse(condition, firstCb, secondCb);

    expect(firstCb).toHaveBeenCalled();
    expect(secondCb).not.toHaveBeenCalled();
  });

  it('should run second Cb if condition is false', () => {
    condition = jest.fn(() => false);

    ifElse(condition, firstCb, secondCb);

    expect(firstCb).not.toHaveBeenCalled();
    expect(secondCb).toHaveBeenCalled();
  });
});
