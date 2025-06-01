'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should return undefined', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    expect(
      ifElse(condition, first, second)
    ).toBeUndefined();
  });

  it('should call first callback if condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second callback if condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should not call any callback if condition throws', () => {
    const condition = jest.fn(() => {
      throw new Error('Oops!');
    });
    const first = jest.fn();
    const second = jest.fn();

    expect(() => ifElse(condition, first, second)).toThrow(
      'Oops!'
    );
    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });
});
