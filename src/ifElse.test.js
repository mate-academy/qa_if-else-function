'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  let firstCb;
  let secondCb;

  beforeEach(() => {
    firstCb = jest.fn();
    secondCb = jest.fn();
  });

  it('should call first cb', () => {
    ifElse(() => true, firstCb, secondCb);

    expect(firstCb).toBeCalledTimes(1);
    expect(secondCb).not.toBeCalled();
  });

  it('should call second cb', () => {
    ifElse(() => false, firstCb, secondCb);

    expect(secondCb).toBeCalledTimes(1);
    expect(firstCb).not.toBeCalled();
  });

  it('should return undefined', () => {
    const result = ifElse(() => false, firstCb, secondCb);

    expect(result).toBeUndefined();
  });
});
