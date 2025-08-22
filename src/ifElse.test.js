/* eslint-disable max-len */
'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should call first when condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second when condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should call second when condition returns truthy non-boolean value', () => {
    const condition = jest.fn(() => 123); // 123 !== true
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should call second when condition returns falsy non-boolean value', () => {
    const falsyValues = [0, '', null, undefined, NaN];

    falsyValues.forEach(value => {
      const condition = jest.fn(() => value);
      const first = jest.fn();
      const second = jest.fn();

      const result = ifElse(condition, first, second);

      expect(result).toBeUndefined();
      expect(first).not.toHaveBeenCalled();
      expect(second).toHaveBeenCalledTimes(1);
    });
  });

  it('should pass no arguments to callbacks', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });
});
