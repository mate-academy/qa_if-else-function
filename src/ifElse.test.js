"use strict";

describe("ifElse", () => {
  const { ifElse } = require("./ifElse");

  let condition;
  let first;
  let second;

  beforeEach(() => {
    condition = jest.fn(() => {});
    first = jest.fn(() => {});
    second = jest.fn(() => {});
  });

  afterEach(() => {
    condition = () => {};
    first = () => {};
    second = () => {};
  });

  it("should be an instance of the function", () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it("condition should be called once", () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it("should call only the second callback if condition is false", () => {
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(0);
    expect(second).toHaveBeenCalledTimes(1);
  });

  it("should call only the first callback if condition is true", () => {
    condition = () => true;
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(0);
  });

  it("function should return nothing", () => {
    const result = ifElse(condition, first, second);

    expect(result).toBe(undefined);
  });
});
