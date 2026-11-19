'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('correct result', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('incorrect result', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledWith();
    expect(condition).toHaveBeenCalledWith();
  });
});
