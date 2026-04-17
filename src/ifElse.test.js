'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let firstCb;
  let secondCb;

  beforeEach(() => {
    firstCb = jest.fn();
    secondCb = jest.fn();
  });

  it('should return undefined', () => {
    const condCb = jest.fn();

    const result = ifElse(condCb, jest.fn(), jest.fn());

    expect(result).toBeUndefined();
    expect(condCb).toHaveBeenCalledTimes(1);
    expect(condCb).toHaveBeenCalledWith();
  });

  it('should run only first callback', () => {
    const condCb = jest.fn().mockReturnValue(true);

    ifElse(condCb, firstCb, secondCb);

    expect(firstCb).toHaveBeenCalledTimes(1);
    expect(firstCb).toHaveBeenCalledWith();
    expect(secondCb).not.toHaveBeenCalled();
    expect(condCb).toHaveBeenCalledTimes(1);
    expect(condCb).toHaveBeenCalledWith();
  });

  it('should run second callback', () => {
    const condCb = jest.fn().mockReturnValue(false);

    ifElse(condCb, firstCb, secondCb);

    expect(secondCb).toHaveBeenCalledTimes(1);
    expect(secondCb).toHaveBeenCalledWith();
    expect(firstCb).not.toHaveBeenCalled();
    expect(condCb).toHaveBeenCalledTimes(1);
    expect(condCb).toHaveBeenCalledWith();
  });
});
