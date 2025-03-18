/* eslint-disable no-console */
'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should call first callback when condition returns true', () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second callback when condition returns false', () => {
    const condition = jest.fn().mockReturnValue(false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
  });

  it('should log correct value based on condition result', () => {
    ifElse(
      () => true,
      () => console.log(1),
      () => console.log(2)
    );
    expect(consoleSpy).toHaveBeenCalledWith(1);
    consoleSpy.mockClear();

    ifElse(
      () => false,
      () => console.log(1),
      () => console.log(2)
    );
    expect(consoleSpy).toHaveBeenCalledWith(2);
  });
});
