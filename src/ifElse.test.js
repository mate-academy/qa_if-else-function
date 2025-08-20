'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.4);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  /* eslint-disable no-console */
  it('should first callback if condition = true', () => {
    console.log = jest.fn();

    ifElse(
      () => Math.random() < 0.5,
      () => console.log(1),
      () => console.log(2),
    );

    expect(console.log.mock.calls[0][0]).toBe(1);
  });

  it('should second callback if condition = false', () => {
    console.log = jest.fn();

    ifElse(
      () => Math.random() > 0.5,
      () => console.log(1),
      () => console.log(2),
    );

    expect(console.log.mock.calls[0][0]).toBe(2);
  });
});
