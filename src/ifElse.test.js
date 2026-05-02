'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call second if condition is false', () => {
    let result = 0;
    const condition = () => Math.PI < 0.4;
    const first = () => (result = 1);
    const second = () => (result = 2);

    ifElse(condition, first, second);
    expect(result).toBe(2);
  });

  it('should call first if condition is true', () => {
    let result = 0;
    const condition = () => Math.PI > 0.5;
    const first = () => (result = 1);
    const second = () => (result = 2);

    ifElse(condition, first, second);
    expect(result).toBe(1);
  });

  it('should not return anything', () => {
    const condition = () => true;
    const first = () => true;
    const second = () => true;

    expect(ifElse(condition, first, second)).toBeUndefined();
  });
});
