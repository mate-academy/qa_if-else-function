'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it(`shouldn't return anything`, () => {
    const condition = () => true;
    const first = () => true;
    const second = () => true;

    expect(ifElse(condition, first, second)).toBeUndefined();
  });

  it(`should call first if condition is true`, () => {
    let result = 0;
    const condition = () => true;
    const first = () => (result = 1);
    const second = () => (result = 2);

    ifElse(condition, first, second);

    expect(result).toBe(1);
  });

  it(`should call second if condition is false`, () => {
    let result = 0;
    const condition = () => false;
    const first = () => (result = 1);
    const second = () => (result = 2);

    ifElse(condition, first, second);

    expect(result).toBe(2);
  });
});
