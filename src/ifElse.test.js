"use strict";

describe("ifElse", () => {
  const { ifElse } = require("./ifElse");

  it("should run 'first' callback if condition is true", () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();

    expect(first.mock.calls).toEqual([[]]);
    expect(first).toHaveBeenCalledWith();

    expect(second.mock.calls).toEqual([]);
  });

  it("should run 'second' callback if condition is false", () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(condition).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();

    expect(first.mock.calls).toEqual([]);
    expect(second).toHaveBeenCalledWith();

    expect(second.mock.calls).toEqual([[]]);
  });

  it("should return undefined", () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();
    expect(ifElse(condition, first, second)).toBeUndefined();
  });
});
