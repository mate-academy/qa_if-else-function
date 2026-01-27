'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('calls the condition callback once with no arguments', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
  });

  it('runs the first cb with no args when condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('runs the second cb with no args when condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
  });

  it('returns undefined', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });
});
