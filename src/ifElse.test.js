/* eslint-disable no-console */
'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call first function if condition return true', () => {
    const f = jest.fn(() => true);
    const one = jest.fn(() => console.log(1));
    const two = jest.fn(() => console.log(2));

    ifElse(f, one, two);

    expect(f).toHaveBeenCalledWith();
    expect(one).toHaveBeenCalledWith();
    expect(two).not.toHaveBeenCalledWith();
  });

  it('should call second function if condition return false', () => {
    const f = jest.fn(() => false);
    const one = jest.fn(() => console.log(1));
    const two = jest.fn(() => console.log(2));

    ifElse(f, one, two);

    expect(f).toHaveBeenCalledWith();
    expect(one).not.toHaveBeenCalledWith();
    expect(two).toHaveBeenCalledWith();
  });

  it('should return undefined', () => {
    expect(ifElse(() => {}, () => {}, () => {})).toBeUndefined();
  });
});
