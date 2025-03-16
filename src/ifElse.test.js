'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should execute the first function when the condition is true', () => {
    let result = 0;

    ifElse(
      () => true,
      () => (result = 1),
      () => (result = 2)
    );

    expect(result).toEqual(1);
  });

  it('should execute the second function when the condition is false', () => {
    let result = 0;

    ifElse(
      () => false,
      () => (result = 1),
      () => (result = 2)
    );

    expect(result).toEqual(2);
  });

  it('should handle a condition that depends on calculations', () => {
    let result = 0;

    ifElse(
      () => Math.random() > 0.5,
      () => (result = 1),
      () => (result = 2)
    );

    expect([1, 2]).toContain(result);
  });

  it('should pass functions as arguments without executing them', () => {
    let firstFunctionCalled = false;
    let secondFunctionCalled = false;

    const firstFunction = () => {
      firstFunctionCalled = true;
    };
    const secondFunction = () => {
      secondFunctionCalled = true;
    };

    const result = 0;

    ifElse(
      () => true,
      firstFunction,
      secondFunction
    );

    expect(result).toEqual(0);
    expect(firstFunctionCalled).toEqual(true);
    expect(secondFunctionCalled).toEqual(false);
  });

  it('should handle null condition', () => {
    let result = 0;

    ifElse(
      () => null,
      () => (result = 1),
      () => (result = 2)
    );

    expect(result).toEqual(2);
  });

  it('should handle undefined condition', () => {
    let result = 0;

    ifElse(
      () => undefined,
      () => (result = 1),
      () => (result = 2)
    );

    expect(result).toEqual(2);
  });
});
