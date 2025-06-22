'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should return undefined', () => {
    expect(
      ifElse(
        () => true,
        () => {},
        () => {},
      ),
    ).toBeUndefined();
  });

  it('should call condition callback', () => {
    const condition = jest.fn(() => true);

    ifElse(
      condition,
      () => {},
      () => {},
    );

    expect(condition).toHaveBeenCalled();
  });

  it('should call only second cb if first returns true', () => {
    const onTrue = jest.fn();
    const onFalse = jest.fn();

    ifElse(() => true, onTrue, onFalse);

    expect(onTrue).toHaveBeenCalled();
    expect(onFalse).not.toHaveBeenCalled();
  });

  it('should call only third cb if first returns false', () => {
    const onTrue = jest.fn();
    const onFalse = jest.fn();

    ifElse(() => false, onTrue, onFalse);

    expect(onFalse).toHaveBeenCalled();
    expect(onTrue).not.toHaveBeenCalled();
  });
});
