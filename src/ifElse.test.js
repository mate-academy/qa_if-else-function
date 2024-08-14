'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  const f = (str) => str.length === 12;

  const conditionTrue = jest.fn(() => f('Mate Academy'));
  const conditionFalse = jest.fn(() => f('JavaScript'));

  const first = jest.fn(() => 'Mate');
  const second = jest.fn(() => 'Academy');

  describe('when condition is true', () => {
    beforeAll(() => {
      ifElse(conditionTrue, first, second);
    });

    test('should evaluate the condition function only once', () => {
      expect(conditionTrue).toHaveBeenCalledTimes(1);
    });

    test('should not call second function', () => {
      expect(second).not.toHaveBeenCalled();
    });

    test('should return the value from the first function', () => {
      const result = first.mock.results[0].value;

      expect(result).toBe('Mate');
    });
  });

  describe('when condition is false', () => {
    beforeAll(() => {
      first.mockClear();
      second.mockClear();
      ifElse(conditionFalse, first, second);
    });

    test('should not call the first function', () => {
      expect(first).not.toHaveBeenCalled();
    });

    test('should evaluate the second function and return its value', () => {
      expect(second).toHaveBeenCalledTimes(1);

      const result = second.mock.results[0].value;

      expect(result).toBe('Academy');
    });

    test('should not evaluate the condition more than necessary', () => {
      expect(conditionFalse).toHaveBeenCalledTimes(1);
    });
  });
});
