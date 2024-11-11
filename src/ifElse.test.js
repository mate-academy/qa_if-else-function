'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it(`should check if 'condition' returns a boolean value`
    + `should call 'condition' 2 times only`, () => {
    const condition = jest.fn(() => 'true');
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBe(`'condition' returns a non-Boolean value`);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();

    expect(condition).toHaveBeenCalledTimes(2);
    expect(first).toHaveBeenCalledTimes(0);
    expect(second).toHaveBeenCalledTimes(0);
  });

  it(`should call 'condition' and 'first' if 'condition' === 'true'`
    + `should call 'condition' 2 times  and 'first' once`, () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();

    expect(condition).toHaveBeenCalledTimes(2);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(0);
  });

  it(`should call 'condition' and 'second' if 'condition' === 'false'`
    + `should call 'condition' 2 times  and 'second' once`, () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();

    expect(condition).toHaveBeenCalledTimes(3);
    expect(first).toHaveBeenCalledTimes(0);
    expect(second).toHaveBeenCalledTimes(1);
  });
});
