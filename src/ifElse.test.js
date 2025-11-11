'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should condition return true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should condition return false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should condition return anything', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    expect(ifElse(condition, first, second)).toBeUndefined();
  });
});
