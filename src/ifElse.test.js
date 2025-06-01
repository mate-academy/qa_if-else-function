'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse.js');

  it('should run first cb if condition is true ', () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should run second cb if condition is false ', () => {
    const condition = jest.fn().mockReturnValue(false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
  });

  it('should not return any values ', () => {
    const condition = jest.fn().mockReturnValue(false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(ifElse(condition, first, second)).toBe(undefined);
  });
});
