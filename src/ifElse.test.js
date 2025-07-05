'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('calls the first callback when condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('calls the second callback when condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('does not return anything', () => {
    const condition = () => true;
    const first = () => {};
    const second = () => {};

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });
});
