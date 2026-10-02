'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let condition;
  let first;
  let second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should call condition exactly once', () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should call condition without arguments', () => {
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
  });

  it('should call first exactly once when condition returns true', () => {
    condition.mockReturnValue(true);
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
  });

  it('should call first without arguments when condition returns true', () => {
    condition.mockReturnValue(true);
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledWith();
  });

  it('should not call second when condition returns true', () => {
    condition.mockReturnValue(true);
    ifElse(condition, first, second);

    expect(second).not.toHaveBeenCalled();
  });

  it('should call second exactly once when condition returns false', () => {
    condition.mockReturnValue(false);
    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should call second without arguments for a false condition', () => {
    condition.mockReturnValue(false);
    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledWith();
  });

  it('should not call first when condition returns false', () => {
    condition.mockReturnValue(false);
    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
  });

  it.each([1, 'true', {}, [], null, undefined, 0, ''])(
    'should call second when condition returns %p instead of true',
    (value) => {
      condition.mockReturnValue(value);
      ifElse(condition, first, second);

      expect(second).toHaveBeenCalledTimes(1);
    },
  );

  it.each([true, false])(
    'should return undefined when condition returns %p',
    (value) => {
      condition.mockReturnValue(value);
      first.mockReturnValue('first result');
      second.mockReturnValue('second result');

      expect(ifElse(condition, first, second)).toBeUndefined();
    },
  );
});
