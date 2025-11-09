'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should not return anything', () => {
    expect(
      ifElse(
        () => true,
        () => {},
        () => {}
      )
    ).toBeUndefined();
  });

  it("should call 'first' if condition returns 'true'", () => {
    const f = jest.fn();

    ifElse(() => true, f, () => {});

    expect(f).toBeCalled();
  });

  it("shouldn't call 'second' if condition returns 'true'", () => {
    const f = jest.fn();

    ifElse(() => true, () => {}, f);

    expect(f).not.toBeCalled();
  });

  it("should call 'second' if condition returns 'false'", () => {
    const f = jest.fn();

    ifElse(() => false, () => {}, f);

    expect(f).toBeCalled();
  });

  it("shouldn't call 'first' if condition returns 'false'", () => {
    const f = jest.fn();

    ifElse(() => false, f, () => {});

    expect(f).not.toBeCalled();
  });

  it("should call 'condition' without arguments", () => {
    const f = jest.fn(() => true);

    ifElse(f, () => {}, () => {});

    expect(f).toBeCalledWith();
  });

  it("should call 'first' without arguments", () => {
    const f = jest.fn();

    ifElse(() => true, f);

    expect(f).toBeCalledWith();
  });

  it("should call 'second' without arguments", () => {
    const f = jest.fn();

    ifElse(() => false, () => {}, f);

    expect(f).toBeCalledWith();
  });
});
