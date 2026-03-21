'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let truthyCondition, falsyCondition, first, second;

  beforeAll(() => {
    truthyCondition = jest.fn(() => true);
    falsyCondition = jest.fn(() => false);

    first = jest.fn(() => 'First');
    second = jest.fn(() => 'Second');
  });

  afterEach(() => {
    first.mockClear();
    second.mockClear();
    truthyCondition.mockClear();
    falsyCondition.mockClear();
  });

  it('should be a function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should return nothing', () => {
    expect(ifElse(truthyCondition, first, second)).toEqual(undefined);
  });

  it('should invoke first cb if truthy contidion', () => {
    ifElse(truthyCondition, first, second);

    expect(first).toHaveBeenCalled();
  });

  it('should invoke second cb if falsy condition', () => {
    ifElse(falsyCondition, first, second);

    expect(second).toHaveBeenCalled();
  });

  it('should invoke one of functions in any case', () => {
    falsyCondition.mockReturnValue(!!(Math.random() > 0.5));

    ifElse(falsyCondition, first, second);

    const totalCalls = first.mock.calls.length + second.mock.calls.length;

    expect(totalCalls).toBe(1);
  });

  it('should not work without condition', () => {
    expect(() => {
      ifElse(undefined, first, second);
    }).toThrow();
  });

  it('should invoke first or second functions without args', () => {
    ifElse(truthyCondition, first, second);
    expect(first).toHaveBeenCalledWith();

    ifElse(falsyCondition, first, second);
    expect(second).toHaveBeenLastCalledWith();
  });
});
