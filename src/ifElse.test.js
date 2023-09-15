'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call the second callback when condition returns false', () => {
    let conditionCalled = false;
    let firstCallbackCalled = false;
    let secondCallbackCalled = false;

    const condition = () => {
      conditionCalled = true;

      return false;
    };

    const firstCallback = () => {
      firstCallbackCalled = true;
    };

    const secondCallback = () => {
      secondCallbackCalled = true;
    };

    ifElse(condition, firstCallback, secondCallback);

    expect(conditionCalled).toBeTruthy();
    expect(firstCallbackCalled).toBeFalsy();
    expect(secondCallbackCalled).toBeTruthy();
  });

  it('should call the first callback when condition returns true', () => {
    let conditionCalled = false;
    let firstCallbackCalled = false;
    let secondCallbackCalled = false;

    const condition = () => {
      conditionCalled = true;

      return true;
    };

    const firstCallback = () => {
      firstCallbackCalled = true;
    };

    const secondCallback = () => {
      secondCallbackCalled = true;
    };

    ifElse(condition, firstCallback, secondCallback);

    expect(conditionCalled).toBeTruthy();
    expect(firstCallbackCalled).toBeTruthy();
    expect(secondCallbackCalled).toBeFalsy();
  });
});
