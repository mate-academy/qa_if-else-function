'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call first function if condition is true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
    expect(condition).toHaveBeenCalled();
  });

  it('should call second function if condition is false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
    expect(condition).toHaveBeenCalled();
  });

  it('should pass even if first and second are empty functions', () => {
    const condition = jest.fn(() => true);

    expect(() => {
      ifElse(
        condition,
        () => {},
        () => {}
      );
    }).not.toThrow();
  });
});
