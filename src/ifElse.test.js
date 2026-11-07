'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should call first if condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
  });

  it('should not call second if condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).not.toHaveBeenCalled();
  });

  it('should call second if condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should not call first if condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
  });

  it('should call condition once', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, jest.fn(), jest.fn());

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should call condition without arguments', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, jest.fn(), jest.fn());

    expect(condition).toHaveBeenCalledWith();
  });

  it('should call first without arguments', () => {
    const first = jest.fn();

    ifElse(() => true, first, jest.fn());

    expect(first).toHaveBeenCalledWith();
  });

  it('should call second without arguments', () => {
    const second = jest.fn();

    ifElse(() => false, jest.fn(), second);

    expect(second).toHaveBeenCalledWith();
  });

  it('should call second if condition returns a truthy non-true value', () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => 1, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should call second if condition returns undefined', () => {
    const first = jest.fn();
    const second = jest.fn();

    ifElse(() => undefined, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('should return nothing', () => {
    const result = ifElse(() => true, jest.fn(), jest.fn());

    expect(result).toBeUndefined();
  });

  it('should not return the result of the called callback', () => {
    const result = ifElse(
      () => false,
      jest.fn(),
      jest.fn(() => 'value'),
    );

    expect(result).toBeUndefined();
  });
});
