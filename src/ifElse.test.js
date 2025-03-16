'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('ifElse function should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call first callback for true condition', () => {
    const condition = jest.fn(() => true);
    const firstCb = jest.fn(() => {});
    const secondCb = jest.fn(() => {});

    ifElse(condition, firstCb, secondCb);

    expect(condition).toHaveBeenCalled();
    expect(firstCb).toHaveBeenCalled();
    expect(secondCb).not.toHaveBeenCalled();
  });

  it('should call second callback for true condition', () => {
    const condition = jest.fn(() => false);
    const firstCb = jest.fn(() => {});
    const secondCb = jest.fn(() => {});

    ifElse(condition, firstCb, secondCb);

    expect(condition).toHaveBeenCalled();
    expect(secondCb).toHaveBeenCalled();
    expect(firstCb).not.toHaveBeenCalled();
  });

  it('should return undefined', () => {
    const condition = jest.fn(() => false);
    const firstCb = jest.fn(() => {});
    const secondCb = jest.fn(() => {});

    expect(ifElse(condition, firstCb, secondCb)).toBeUndefined();
  });
});
