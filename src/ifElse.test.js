'use strict';

describe('ifElse', () => {
  const ifElse = require('./ifElse'); // Правильний імпорт функції

  it('should return undefined', () => {
    expect(ifElse(() => {}, () => {}, () => {})).toBeUndefined();
  });

  it('should call the first callback if condition returns true', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();
    const condition = jest.fn(() => true);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalledTimes(1);
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call the second callback if condition returns false', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();
    const condition = jest.fn(() => false);

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });

  it('should call condition callback only once', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();
    const condition = jest.fn(() => true);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalledTimes(1);
  });

  it('should handle condition callback that throws an error', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();
    const condition = jest.fn(() => {
      throw new Error('Test error');
    });

    expect(() => ifElse(condition, firstCallback, secondCallback))
      .toThrow('Test error');
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should handle first callback that throws an error', () => {
    const firstCallback = jest.fn(() => {
      throw new Error('Test error');
    });
    const secondCallback = jest.fn();
    const condition = jest.fn(() => true);

    expect(() => ifElse(condition, firstCallback, secondCallback))
      .toThrow('Test error');
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should handle second callback that throws an error', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn(() => {
      throw new Error('Test error');
    });
    const condition = jest.fn(() => false);

    expect(() => ifElse(condition, firstCallback, secondCallback))
      .toThrow('Test error');
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });

  it('should handle different types of condition results', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(() => 'string', firstCallback, secondCallback);
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });
});
