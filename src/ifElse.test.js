'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let fr;
  let sc;

  beforeEach(() => {
    fr = jest.fn();
    sc = jest.fn();
  });

  it('should call first function if condition is true', () => {
    ifElse(() => true, fr, sc);

    expect(fr).toHaveBeenCalled();
    expect(sc).not.toHaveBeenCalled();
  });

  it('should call second function if condition is false', () => {
    ifElse(() => false, fr, sc);

    expect(sc).toHaveBeenCalled();
    expect(fr).not.toHaveBeenCalled();
  });
});
