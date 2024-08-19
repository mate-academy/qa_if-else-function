/* eslint-disable quotes */
"use strict";

describe("ifElse", () => {
  const { ifElse } = require("./ifElse");

  it("should run first cb if condition === `true`", () => {
    const f1 = jest.fn();

    ifElse(
      () => true,
      f1,
      () => false
    );

    expect(f1).toBeCalled();
  });

  it("should run second cb if condition === `false`", () => {
    const f2 = jest.fn();

    ifElse(
      () => false,
      () => {},
      f2
    );

    expect(f2).toBeCalled();
  });

  it("should call first cb without args", () => {
    const f1 = jest.fn();

    ifElse(
      () => true,
      f1,
      () => false
    );

    expect(f1).toHaveBeenCalledWith();
  });

  it("should call second cb without args", () => {
    const f2 = jest.fn();

    ifElse(
      () => false,
      () => [],
      f2
    );

    expect(f2).toHaveBeenCalledWith();
  });

  it("should return `undefined`", () => {
    const result = ifElse(
      () => false,
      () => {},
      () => {}
    );

    expect(result).toBeUndefined();
  });
});
