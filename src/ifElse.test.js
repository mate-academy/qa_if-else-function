'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let callback1;
  let callback2;

  beforeEach(() => {
    callback1 = jest.fn();
    callback2 = jest.fn();
  });

  it('should be declared', () => {
    expect(ifElse).toBeDefined();
  });

  it('should be a function', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call the first callback if conditions return TRUE', () => {
    const condition = jest.fn().mockReturnValue(true);

    ifElse(condition, callback1, callback2);

    expect(condition).toHaveBeenCalled();
    expect(callback1).toHaveBeenCalled();
    expect(callback2).not.toHaveBeenCalled();
  });

  it('should call the second callback if conditions return FALSE', () => {
    const condition = jest.fn().mockReturnValue(false);

    ifElse(condition, callback1, callback2);

    expect(condition).toHaveBeenCalled();
    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).toHaveBeenCalled();
  });
});
