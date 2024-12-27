"use strict";

describe("ifElse", () => {
  const { ifElse } = require("./ifElse");

  it(`should call 'first' func if 'condition' return 'true'`, () => {
    const condition = jest.fn(() => true);

    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it(`should call 'second' func if 'condition' return 'false'`, () => {
    const condition = jest.fn(() => false);

    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });
});
