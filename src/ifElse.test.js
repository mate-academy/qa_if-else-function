/* eslint-disable max-len */
'use strict';

const { ifElse } = require('./ifElse'); // Adjust the import path based on your project structure

describe('ifElse', () => {
  it('should call the first callback if condition returns true', () => {
    // Mocking condition to return true
    const condition = jest.fn().mockReturnValue(true);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call the second callback if condition returns false', () => {
    // Mocking condition to return false
    const condition = jest.fn().mockReturnValue(false);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  // Optionally, you can add more specific edge cases or scenarios to test
});
