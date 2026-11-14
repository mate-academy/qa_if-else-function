'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('має виконувати перший колбек, коли умова повертає true', () => {
    const condition = jest.fn().mockReturnValue(true);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });

  it('має виконувати другий колбек, коли умова повертає false', () => {
    const condition = jest.fn().mockReturnValue(false);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
    expect(result).toBeUndefined();
  });

  it(
    'має викликати другий колбек для truthy значень, ' +
      'які не є булевим true',
    () => {
      const condition = jest.fn().mockReturnValue(1);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(first).not.toHaveBeenCalled();
      expect(second).toHaveBeenCalledTimes(1);
    },
  );
});
