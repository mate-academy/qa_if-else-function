'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should return 'first' if 'condition' is true`, () => {
    const condition = () => true;
    const firstCb = jest.fn();
    const secondCb = jest.fn();

    ifElse(condition, firstCb, secondCb);

    expect(firstCb).toHaveBeenCalled();
    expect(secondCb).not.toHaveBeenCalled();
  });
  
  it(`should return 'first' without arguments`, () => {
    const condition = () => true;
    const firstCb = jest.fn();

    ifElse(condition, firstCb, () => {});

    expect(firstCb).toHaveBeenCalledWith();
  });
  
  it(`should return 'second' if 'condition' is false`, () => {
    const condition = () => false;
    const firstCb = jest.fn();
    const secondCb = jest.fn();

    ifElse(condition, firstCb, secondCb);

    expect(firstCb).not.toHaveBeenCalled();
    expect(secondCb).toHaveBeenCalled();
  });
  
  it(`should return 'second' without arguments`, () => {
    const condition = () => false;
    const secondCb = jest.fn();

    ifElse(condition, () => {}, secondCb);

    expect(secondCb).toHaveBeenCalledWith();
  });
  
  it(`should return condition without arguments`, () => {
    const condition = jest.fn(() => false);

    ifElse(condition, () => {}, () => {});

    expect(condition).toHaveBeenCalledWith();
  });

  it('should return nothing', () => {
    expect(ifElse(() => {}, () => {}, () => {})).toBe();
  });
});
