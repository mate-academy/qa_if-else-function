'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('wywołuje pierwszą funkcję, gdy condition zwraca true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    // Sprawdzamy, czy condition zostało wywołane
    expect(condition).toHaveBeenCalled();
    // Pierwsza funkcja powinna zostać wywołana
    expect(first).toHaveBeenCalled();
    // Druga funkcja nie powinna zostać wywołana
    expect(second).not.toHaveBeenCalled();
  });

  it('wywołuje drugą funkcję, gdy condition zwraca false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('poprawnie działa przy wielokrotnych wywołaniach', () => {
    const condition = jest.fn()
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);
    const first = jest.fn();
    const second = jest.fn();

    // pierwsze wywołanie: condition = true
    ifElse(condition, first, second);
    // drugie wywołanie: condition = false
    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
  });
});
