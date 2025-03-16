'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('ifElse function should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call the first callback', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);
    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second callback', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);
    expect(condition).toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
  });
});
