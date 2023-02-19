'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let testA, testB;

  beforeEach(() => {
    testA = 0;
    testB = 0;
  });

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  // write tests here
  it(`shouldn't return an anything`, () => {
    const result = ifElse(
      () => true,
      () => {},
      () => {}
    );

    expect(result).toBeUndefined();
  });

  it(`should call 'first' function if 'condition' returns true`, () => {
    ifElse(
      () => true,
      () => {
        testA = 1;
      },
      () => {
        testB = 1;
      }
    );
    expect(testA).toEqual(1);
    expect(testB).toEqual(0);
  });

  it(`should call 'second' function if 'condition' returns true`, () => {
    ifElse(
      () => false,
      () => {
        testA = 1;
      },
      () => {
        testB = 1;
      }
    );
    expect(testA).toEqual(0);
    expect(testB).toEqual(1);
  });
});
