'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let condition, first, second;

  beforeEach(() => {
    condition = jest.fn(() => true);
    first = jest.fn();
    second = jest.fn();
  });

  it('should take 3 callbacks ', () => {
    expect(typeof condition).toBe('function');
    expect(typeof first).toBe('function');
    expect(typeof second).toBe('function');
  });

  it('should call first if condition is true', () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second if condition is false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should return undefined', () => {
    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });
});
