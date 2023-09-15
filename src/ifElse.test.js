'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should return undefined', () => {
    expect(ifElse(() => {}, () => {}, () => {})).toBeUndefined();
  });

  it('should call the second callback when condition returns false', () => {
    const condition = jest.fn().mockReturnValue(false);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    // Ensure that the condition function was called
    expect(condition).toHaveBeenCalled();

    // Ensure that the first callback was not called
    expect(firstCallback).not.toHaveBeenCalled();

    // Ensure that the second callback was called
    expect(secondCallback).toHaveBeenCalled();
  });

  it('should call the first callback when condition returns true', () => {
    const condition = jest.fn().mockReturnValue(true);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    // Ensure that the condition function was called
    expect(condition).toHaveBeenCalled();

    // Ensure that the first callback was called
    expect(firstCallback).toHaveBeenCalled();

    // Ensure that the second callback was not called
    expect(secondCallback).not.toHaveBeenCalled();
  });
});
