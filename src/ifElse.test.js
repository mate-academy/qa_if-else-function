'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call first arg one time', () => {
    const f = jest.fn();

    ifElse(f, () => {}, () => {});

    expect(f).toHaveBeenCalledTimes(1);
  });

  it('should call second arg one time, if first arg return true', () => {
    const f = jest.fn();
    const f2 = jest.fn();

    ifElse(() => true, f, f2);

    expect(f).toHaveBeenCalledTimes(1);
    expect(f2).not.toHaveBeenCalled();
  });

  it('should call third arg one time, if first arg return false', () => {
    const f = jest.fn();
    const f2 = jest.fn();

    ifElse(() => false, f2, f);

    expect(f).toHaveBeenCalledTimes(1);
    expect(f2).not.toHaveBeenCalled();
  });
});
