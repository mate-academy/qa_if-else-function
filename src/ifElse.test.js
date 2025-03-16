'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it(`should be declared and be an instance of Function`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should run the first callback if the condition returns true`, () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .toHaveBeenCalled();
  });

  it(`should not run the second callback if the condition returns true`, () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second)
      .not.toHaveBeenCalled();
  });

  it(`should run the second callback if the condition returns false`, () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second)
      .toHaveBeenCalled();
  });

  it(`should not run the first callback if the condition returns false`, () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first)
      .not.toHaveBeenCalled();
  });
});
