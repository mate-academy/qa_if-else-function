'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Create a spy for console.log to track its calls
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Restore the original console.log after each test
    consoleLogSpy.mockRestore();
  });

  it('should call the first callback if condition is true', () => {
    // Mock the condition to always return true
    const condition = jest.fn(() => true);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call the second callback if condition is false', () => {
    // Mock the condition to always return false
    const condition = jest.fn(() => false);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
