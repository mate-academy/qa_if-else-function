'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared ', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should not return anything', () => {
    expect(
      ifElse(
        () => true,
        () => 'first',
        () => 'second',
      ),
    ).toBeUndefined();
  });

  let condition;
  let first;
  let second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should call the first callback when condition returns true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second callback when condition returns false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should execute condition callback once without arguments', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
  });

  it('should call the selected callback without any arguments', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledWith();
  });
});
