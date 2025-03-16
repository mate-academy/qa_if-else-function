'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should return first if true', () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => true, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should return second if false', () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => false, first, second);

    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
  });

  it('should return second if not true', () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => {}, first, second);

    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
  });
});
