'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should be run a 'first' callback if 'condition' returns 'true'`, () => {
    let result = 0;
    const condition = () => Math.SQRT2 < 2;
    const first = () => (result = 1);
    const second = () => (result = 2);

    ifElse(condition, first, second);

    expect(result).toBe(1);
  });

  it(`should be run a 'second' callback if 'condition' returns 'false'`, () => {
    let result = 0;
    const condition = () => Math.SQRT2 > 2;
    const first = () => (result = 1);
    const second = () => (result = 2);

    ifElse(condition, first, second);

    expect(result).toBe(2);
  });

  it(`should be no result is expected from 'isElse' function`, () => {
    const condition = () => true;
    const first = () => true;
    const second = () => true;

    expect(ifElse(condition, first, second)).toBeUndefined();
  });
});
