'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call first cb 1 time if condition = true', () => {
    const f1 = jest.fn();
    const f2 = jest.fn();

    ifElse(
      () => true,
      f1,
      f2,
    );

    expect(f1).toHaveBeenCalledTimes(1);
    expect(f2).toHaveBeenCalledTimes(0);
  });

  it('should call second cb 1 time if condition = false', () => {
    const f1 = jest.fn();
    const f2 = jest.fn();

    ifElse(
      () => false,
      f1,
      f2,
    );

    expect(f1).toHaveBeenCalledTimes(0);
    expect(f2).toHaveBeenCalledTimes(1);
  });
});
