'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call `f1` when condition is true', () => {
    const condition = jest.fn(() => true);
    const f1 = jest.fn();
    const f2 = jest.fn();

    ifElse(condition, f1, f2);

    expect(f1).toHaveBeenCalled();
    expect(f2).not.toHaveBeenCalled();
  });

  it('should call `f2` when condition is false', () => {
    const condition = jest.fn(() => false);
    const f1 = jest.fn();
    const f2 = jest.fn();

    ifElse(condition, f1, f2);

    expect(f1).not.toHaveBeenCalled();
    expect(f2).toHaveBeenCalled();
  });
});
