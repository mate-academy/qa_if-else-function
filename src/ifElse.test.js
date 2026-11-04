'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  let condition;
  let first;
  let second;

  beforeEach(() => {
    condition = jest.fn();
    first = jest.fn();
    second = jest.fn();
  });

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it.each([true, false])(
    'should call condition once without arguments when it returns %s',
    (value) => {
      condition.mockReturnValue(value);

      ifElse(condition, first, second);

      expect(condition).toHaveBeenCalledTimes(1);
      expect(condition).toHaveBeenCalledWith();
    },
  );

  it('should call only first when condition returns true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call only second when condition returns false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
  });

  it.each([undefined, null, 0, '', 1, 'true', {}, []])(
    'should call second when condition does not return exactly true: %p',
    (value) => {
      condition.mockReturnValue(value);

      ifElse(condition, first, second);

      expect(second).toHaveBeenCalledTimes(1);
      expect(second).toHaveBeenCalledWith();
      expect(first).not.toHaveBeenCalled();
    },
  );

  it.each([true, false])(
    'should return undefined when condition returns %s',
    (value) => {
      condition.mockReturnValue(value);
      first.mockReturnValue('first result');
      second.mockReturnValue('second result');

      expect(ifElse(condition, first, second)).toBeUndefined();
    },
  );

  it('should check condition again on each call', () => {
    condition.mockReturnValueOnce(true).mockReturnValueOnce(false);

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(2);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
  });
});
