'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should call first if condition returns true', () => {
    const condition = () => true;
    const first = jest.fn(); // мок-функция
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second if condition returns false', () => {
    const condition = () => false;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should not pass any arguments to callbacks', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith(); // вызван без аргументов
    expect(first).toHaveBeenCalledWith(); // вызван без аргументов
    expect(second).not.toHaveBeenCalled();
  });
});
