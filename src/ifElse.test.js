'use strict';

describe('ifElse', () => {
  it('should not return any value', () => {
    const { ifElse } = require('./ifElse');

    const result = ifElse(() => {}, () => {}, () => {});

    expect(result).toBeUndefined();
  });

  it('should recieve 3 callbacks', () => {
    const mockIfElse = jest.fn();

    mockIfElse(jest.fn(), jest.fn(), jest.fn());

    expect(mockIfElse).toHaveBeenCalledWith(
      expect.any(Function),
      expect.any(Function),
      expect.any(Function)
    );
  });

  it('should call the condition callback in any case', () => {
    const { ifElse } = require('./ifElse');
    const condition = jest.fn();

    ifElse(condition, () => {}, () => {});
    expect(condition).toHaveBeenCalled();
  });

  test('calls first callback when condition is true', () => {
    const { ifElse } = require('./ifElse');
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  test('calls second callback when condition is false', () => {
    const { ifElse } = require('./ifElse');
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });
});
