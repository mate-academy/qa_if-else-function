"use strict";

describe("ifElse", () => {
  const { ifElse } = require("./ifElse");
  let mockCondition;
  let mockFirst;
  let mockSecond;

  beforeEach(() => {
    mockCondition = jest.fn();
    mockFirst = jest.fn();
    mockSecond = jest.fn();
  });

  it("should be declared", () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it("should execute first callback if condition === true", () => {
    mockCondition.mockReturnValue(true);

    ifElse(mockCondition, mockFirst, mockSecond);

    expect(mockCondition).toHaveBeenCalledTimes(1);
    expect(mockCondition).toHaveBeenCalledWith();

    expect(mockFirst).toHaveBeenCalledTimes(1);
    expect(mockFirst).toHaveBeenCalledWith();

    expect(mockSecond).not.toHaveBeenCalled();
  });

  it("should execute second callback if condition === false", () => {
    mockCondition.mockReturnValue(false);

    ifElse(mockCondition, mockFirst, mockSecond);

    expect(mockCondition).toHaveBeenCalledTimes(1);
    expect(mockCondition).toHaveBeenCalledWith();

    expect(mockFirst).not.toHaveBeenCalled();

    expect(mockSecond).toHaveBeenCalledTimes(1);
    expect(mockSecond).toHaveBeenCalledWith();
  });

  it("should return undefined", () => {
    mockCondition.mockReturnValue(true);

    const actual = ifElse(mockCondition, mockFirst, mockSecond);

    expect(actual).toBeUndefined();
  });
});
