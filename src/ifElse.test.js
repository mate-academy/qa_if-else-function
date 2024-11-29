/* eslint-disable no-console */
'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it(`should call 'f' if first argument return 'true'`, () => {
    const f = jest.fn();
    const cb = () => console.log(2);

    ifElse(() => true, f, cb);

    expect(f).toHaveBeenCalled();
  });

  it(`should call 'f' if first argument return 'false'`, () => {
    const f = jest.fn();
    const cb = () => console.log(1);

    ifElse(() => false, cb, f);

    expect(f).toHaveBeenCalled();
  });

  it(`should return undefined if first argument is 'true'`, () => {
    expect(ifElse(() => true, () => {}, () => {})).toBeUndefined();
  });

  it(`should return undefined if first argument is 'false'`, () => {
    expect(ifElse(() => false, () => {}, () => {})).toBeUndefined();
  });
});
