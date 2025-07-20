'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should call the first callback if condition returns true', () => {
    const conditionResult = true;
    let firstCalled = false;
    let secondCalled = false;

    ifElse(
      () => conditionResult,
      () => {
        firstCalled = true;
      },

      () => {
        secondCalled = true;
      }
    );

    expect(firstCalled).toBe(true);
    expect(secondCalled).toBe(false);
  });

  it('should call the second callback if condition returns false', () => {
    const conditionResult = false;
    let firstCalled = false;
    let secondCalled = false;

    ifElse(
      () => conditionResult,
      () => {
        firstCalled = true;
      },
      () => {
        secondCalled = true;
      }
    );

    expect(firstCalled).toBe(false);
    expect(secondCalled).toBe(true);
  });

  it('should evaluate the condition correctly', () => {
    let conditionResult = true;

    ifElse(
      () => conditionResult,
      () => {},
      () => {}
    );

    expect(conditionResult).toBe(true);

    conditionResult = false;

    ifElse(
      () => conditionResult,
      () => {},
      () => {}
    );

    expect(conditionResult).toBe(false);
  });
});
