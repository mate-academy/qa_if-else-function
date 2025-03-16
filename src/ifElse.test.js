'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let firstFunction;
  let secondFunction;

  beforeEach(() => {
    firstFunction = jest.fn();
    secondFunction = jest.fn();
  });

  afterEach(() => {
    firstFunction = null;
    secondFunction = null;
  });

  it(`should be declared`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should call the first function if condition is 'true'`, () => {
    const condition = jest.fn(() => true);
 
    ifElse(condition, firstFunction, secondFunction);
    expect(firstFunction).toHaveBeenCalled();
  });

  it(`should not call the second function if condition is 'true'`, () => {
    const condition = jest.fn(() => true);

    ifElse(condition, firstFunction, secondFunction);
    expect(secondFunction).not.toHaveBeenCalled();
  });

  it(`should call the second function if condition is 'false'`, () => {
    const condition = jest.fn(() => false);

    ifElse(condition, firstFunction, secondFunction);
    expect(secondFunction).toHaveBeenCalled();
  });

  it(`should not call the first function if condition is 'false'`, () => {
    const condition = jest.fn(() => false);

    ifElse(condition, firstFunction, secondFunction);
    expect(firstFunction).not.toHaveBeenCalled();
  });
});