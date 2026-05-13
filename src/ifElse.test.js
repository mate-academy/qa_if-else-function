/* eslint-disable no-console */
'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should not return anything', () => {
    const result = ifElse(
      () => Math.random() > 0.5,
      () => console.log(1),
      () => console.log(2),
    );

    expect(result).toBeUndefined();
  });

  it('should call condition with no arguments', () => {
    const condition = jest.fn();

    ifElse(condition, jest.fn(), jest.fn());

    expect(condition).toHaveBeenCalled();
    expect(condition).toHaveBeenCalledWith();
  });

  it('should run first callback if condition returned true', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(() => true, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call first callback with no arguments', () => {
    const firstCallback = jest.fn();

    ifElse(() => true, firstCallback, jest.fn());

    expect(firstCallback).toHaveBeenCalledWith();
  });

  it('should call first callback only once', () => {
    const firstCallback = jest.fn();

    ifElse(() => true, firstCallback, jest.fn());

    expect(firstCallback).toHaveBeenCalledTimes(1);
  });

  it('should run second callback if condition returned false', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(() => false, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  it('should call second callback with no arguments', () => {
    const secondCallback = jest.fn();

    ifElse(() => false, jest.fn(), secondCallback);

    expect(secondCallback).toHaveBeenCalledWith();
  });

  it('should call second callback only once', () => {
    const secondCallback = jest.fn();

    ifElse(() => false, jest.fn(), secondCallback);

    expect(secondCallback).toHaveBeenCalledTimes(1);
  });
});
