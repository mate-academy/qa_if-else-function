'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  // 1.1 Sprawdzenie arności funkcji
  it('ma dokładnie 3 argumenty (arity = 3)', () => {
    expect(ifElse.length).toBe(3);
  });

  it('wywołuje pierwszą funkcję, gdy condition zwraca true, '
     + 'z zachowaniem kolejności i bez argumentów', () => {
    const calls = [];
    const condition = jest.fn(() => {
      calls.push('condition');

      return true;
    });
    const first = jest.fn(() => calls.push('first'));
    const second = jest.fn(() => calls.push('second'));

    const result = ifElse(condition, first, second);

    // Kolejność wywołań
    expect(calls).toEqual(['condition', 'first']);
    // Wywołania bez argumentów
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
    // Sprawdzenie liczby wywołań
    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(0);
    // Funkcja zwraca undefined
    expect(result).toBeUndefined();
  });

  it('wywołuje drugą funkcję, gdy condition zwraca false, '
     + 'z zachowaniem kolejności i bez argumentów', () => {
    const calls = [];
    const condition = jest.fn(() => {
      calls.push('condition');

      return false;
    });
    const first = jest.fn(() => calls.push('first'));
    const second = jest.fn(() => calls.push('second'));

    const result = ifElse(condition, first, second);

    expect(calls).toEqual(['condition', 'second']);
    expect(condition).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledWith();
    // Sprawdzenie liczby wywołań
    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(0);
    expect(second).toHaveBeenCalledTimes(1);
    expect(result).toBeUndefined();
  });

  it('poprawnie działa przy wielokrotnych wywołaniach, '
     + 'z zachowaniem kolejności i bez argumentów', () => {
    const calls = [];
    const condition = jest.fn()
      .mockImplementationOnce(() => {
        calls.push('condition1');

        return true;
      })
      .mockImplementationOnce(() => {
        calls.push('condition2');

        return false;
      });
    const first = jest.fn(() => calls.push('first'));
    const second = jest.fn(() => calls.push('second'));

    const result1 = ifElse(condition, first, second);
    const result2 = ifElse(condition, first, second);

    expect(calls).toEqual(['condition1', 'first', 'condition2', 'second']);
    expect(condition).toHaveBeenCalledWith();
    expect(first).toHaveBeenCalledWith();
    expect(second).toHaveBeenCalledWith();
    // Sprawdzenie liczby wywołań po dwóch wywołaniach
    expect(condition).toHaveBeenCalledTimes(2);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();
  });
});
