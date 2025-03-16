"use strict";

describe("ifElse", () => {
  const { ifElse } = require("./ifElse");
  let first;
  let second;

  beforeEach(() => {
    first = jest.fn();
    second = jest.fn();
  });

  it(`should call 'first' if condition returns true`, () => {
    const condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it(`should call 'second' if condition returns false`, () => {
    const condition = jest.fn(() => false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
  });

  it(`should call 'second' if condition returns null`, () => {
    const condition = jest.fn(() => null);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
  });

  it(`should call 'second' if condition returns undefined`, () => {
    const condition = jest.fn(() => undefined);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
  });

  it(`should call 'first' once if condition is true`, () => {
    const condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
  });

  it(`should call 'second' once if condition is false`, () => {
    const condition = jest.fn(() => false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
  });

  it(`should call 'condition' once`, () => {
    const condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });
});
