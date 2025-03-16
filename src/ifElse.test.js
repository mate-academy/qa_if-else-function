"use strict";

describe("ifElse", () => {
  const { ifElse } = require("./ifElse");

  it("should be declared", () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it("should call condition cb", () => {
    const cond = jest.fn(() => {});
    const cb1 = jest.fn(() => {});
    const cb2 = jest.fn(() => {});

    ifElse(cond, cb1, cb2);
    expect(cond).toHaveBeenCalled();
  });

  it("should run first cb if condition return true", () => {
    const cond = jest.fn(() => true);
    const cb1 = jest.fn(() => {});
    const cb2 = jest.fn(() => {});

    ifElse(cond, cb1, cb2);
    expect(cb1).toHaveBeenCalled();
  });

  it("should run second cb if condition return false", () => {
    const cond = jest.fn(() => false);
    const cb1 = jest.fn(() => {});
    const cb2 = jest.fn(() => {});

    ifElse(cond, cb1, cb2);
    expect(cb2).toHaveBeenCalled();
  });

  it("should return undefined if cond return false", () => {
    const cond = jest.fn(() => false);
    const cb1 = jest.fn(() => {});
    const cb2 = jest.fn(() => {});

    const result = ifElse(cond, cb1, cb2);

    expect(result).toBe(undefined);
  });

  it("should return undefined if cond return true", () => {
    const cond = jest.fn(() => true);
    const cb1 = jest.fn(() => {});
    const cb2 = jest.fn(() => {});

    const result = ifElse(cond, cb1, cb2);

    expect(result).toBe(undefined);
  });
});
