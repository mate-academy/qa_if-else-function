'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should call condition exactly once with no arguments', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
  });

  it('calls only first once without arguments for true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('calls only second once without arguments for false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
  });

  it.each([0, 1, null, undefined, 'true', {}, []])(
    'should call second when condition returns %p instead of strict true',
    (conditionResult) => {
      const condition = jest.fn(() => conditionResult);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(first).not.toHaveBeenCalled();
      expect(second).toHaveBeenCalledTimes(1);
      expect(second).toHaveBeenCalledWith();
    },
  );

  it('should return undefined when first branch is executed', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn(() => 'first result');
    const second = jest.fn(() => 'second result');

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });

  it('should return undefined when second branch is executed', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn(() => 'first result');
    const second = jest.fn(() => 'second result');

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });
});
