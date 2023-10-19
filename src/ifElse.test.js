"use strict";

describe("ifElse", () => {
  const { ifElse } = require("./ifElse");

  it("should run the first callback if the condition returns true", () => {
    let executed = false;

    ifElse(
      () => true,
      () => {
        executed = true;
      },
      () => {}
    );

    expect(executed).toBe(true);
  });

  it("should run the second callback if the condition returns false", () => {
    let executed = false;

    ifElse(
      () => false,
      () => {},
      () => {
        executed = true;
      }
    );

    expect(executed).toBe(true);
  });

  it("should not run any callback if the condition returns a value other than true or false", () => {
    let executedFirst = false;
    let executedSecond = false;

    ifElse(
      () => null,
      () => {
        executedFirst = true;
      },
      () => {
        executedSecond = true;
      }
    );

    expect(executedFirst).toBe(false);
    expect(executedSecond).toBe(false);
  });

  it("should work with complex conditions", () => {
    let executed = false;

    ifElse(
      () => Math.random() > 0.5,
      () => {
        executed = true;
      },
      () => {}
    );

    expect(executed).toBe(true);
  });
});
