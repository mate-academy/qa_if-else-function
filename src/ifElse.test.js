'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should return undefined', () => {
    expect(
      ifElse(
        () => false,
        () => {},
        () => {}
      )
    ).toBeUndefined();
  });

  it('should run fisrt CB if condition is true', () => {
    const firstCb = jest.fn();
    const secondCb = jest.fn();

    ifElse(() => true, firstCb, secondCb);

    expect(firstCb).toHaveBeenCalled();
    expect(secondCb).not.toHaveBeenCalled();
  });

  it('should run second CB if condition is false', () => {
    const firstCb = jest.fn();
    const secondCb = jest.fn();

    ifElse(() => false, firstCb, secondCb);

    expect(firstCb).not.toHaveBeenCalled();
    expect(secondCb).toHaveBeenCalled();
  });
});
