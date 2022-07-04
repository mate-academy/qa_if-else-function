/* eslint-disable no-console */
'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be defined', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should call ifCase if condition returns true', () => {
    const f = jest.fn(() => true);
    const ifCase = jest.fn();
    const elseCase = jest.fn();

    ifElse(f, ifCase, elseCase);

    expect(ifCase).toHaveBeenCalled();
  });

  it('should not call elseCase if condition returns true', () => {
    const f = jest.fn(() => true);
    const ifCase = jest.fn();
    const elseCase = jest.fn();

    ifElse(f, ifCase, elseCase);

    expect(elseCase).not.toHaveBeenCalled();
  });

  it('should call elseCase if condition returns false', () => {
    const f = jest.fn(() => false);
    const ifCase = jest.fn();
    const elseCase = jest.fn();

    ifElse(f, ifCase, elseCase);

    expect(elseCase).toHaveBeenCalled();
  });

  it('should not call ifCase if condition returns false', () => {
    const f = jest.fn(() => false);
    const ifCase = jest.fn();
    const elseCase = jest.fn();

    ifElse(f, ifCase, elseCase);

    expect(ifCase).not.toHaveBeenCalled();
  });

  it('should return undefined', () => {
    const f = jest.fn(() => true);
    const ifCase = jest.fn();
    const elseCase = jest.fn();
    const conditionResult = ifElse(f, ifCase, elseCase);

    expect(conditionResult).toBeUndefined();
  });
});
