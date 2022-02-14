'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should runs a `first` function if `condition` returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should runs a `second` function if `condition` returns not true', () => {
    const condition = jest.fn(() => !true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });
});
