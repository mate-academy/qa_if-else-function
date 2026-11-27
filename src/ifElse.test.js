'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared ', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call first call back if condition is true ', () => {
    const first = jest.fn();

    const second = jest.fn();

    const condition = () => true;

    ifElse(condition, first, second);
    expect(first.mock.calls.length).toBe(1);
    expect(second.mock.calls.length).toBe(0);
  });

  it('should call second call back if condition is false ', () => {
    const first = jest.fn();

    const second = jest.fn();

    const condition = () => false;

    ifElse(condition, first, second);
    expect(first.mock.calls.length).toBe(0);
    expect(second.mock.calls.length).toBe(1);
  });
});
