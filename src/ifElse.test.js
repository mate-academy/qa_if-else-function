'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should call first() if condition returns 'true'`, () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it(`should call second() if condition returns 'false'`, () => {
    const condition = jest.fn().mockReturnValue(false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it(`should call first() only once when condition() returns 'true'`, () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(2);
    expect(second).not.toHaveBeenCalled();
  });

  it(`should call second() only once when condition() returns 'false'`, () => {
    const condition = jest.fn().mockReturnValue(false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);
    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(2);
    expect(first).not.toHaveBeenCalled();
  });
});
