'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should run a first cb if condition return true', () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => true, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should run a second cb if condition return false', () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => false, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should return undefined', () => {
    expect(
      ifElse(
        () => {},
        () => {},
        () => {},
      ),
    ).toBeUndefined();
  });

  // write tests here
});
