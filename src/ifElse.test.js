'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it(`should be declared and be an instance of function`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should run the first callback if condition returns true', () => {
    let result = 0;

    ifElse(
      () => true,
      () => {
        result = 1;
      },
      () => {
        result = 2;
      }
    );

    expect(result).toBe(1);
  });

  it('should run the second callback if condition returns false', () => {
    let result = 0;

    ifElse(
      () => false,
      () => {
        result = 1;
      },
      () => {
        result = 2;
      }
    );

    expect(result).toBe(2);
  });
});
