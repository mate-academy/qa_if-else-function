'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it(`should run the first callback if condition returns `
    + `'true'`, () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it(`should run the first callback if condition returns `
    + `'false'`, () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it(`should handle condition throwing an error`, () => {
    const condition = jest.fn(() => {
      throw new Error('Test error');
    });
    const first = jest.fn();
    const second = jest.fn();

    expect(() => ifElse(condition, first, second)).toThrow('Test '
      + 'error');
    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });
});
