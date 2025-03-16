"use strict";

describe("ifElse", () => {
  const { ifElse } = require("./ifElse");

  const condition = (bool) => () => bool;
  const first = jest.fn((val) => val);
  const second = jest.fn((val) => val);

  it("should run first callback if condition is true", () => {
    ifElse(condition(true), first, second);

    expect(first).toHaveBeenCalled();
  });

  it("should run second callback if condition is false", () => {
    ifElse(condition(false), first, second);

    expect(second).toHaveBeenCalled();
  });
});
