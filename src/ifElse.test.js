'use strict';

describe('ifElse', () => {
   const { ifElse } = require('./ifElse');

    it('should run the first callback if condition returns true', () => {
      const condition = jest.fn(() => true);
      const firstCallback = jest.fn();

      ifElse(condition, firstCallback, () => {});

      expect(condition).toHaveBeenCalled();
      expect(firstCallback).toHaveBeenCalled();
    });

    it('should run the second callback if condition returns false', () => {
      const condition = jest.fn(() => false);
      const secondCallback = jest.fn();

      ifElse(condition, () => {}, secondCallback);

      expect(condition).toHaveBeenCalled();
      expect(secondCallback).toHaveBeenCalled();
    });

    it('should not run other callback when condition callback is called', () => {
      const condition = jest.fn(() => true);
      const firstCallback = jest.fn();
      const secondCallback = jest.fn();

      ifElse(condition, firstCallback, secondCallback);

      expect(condition).toHaveBeenCalled();
      expect(firstCallback).toHaveBeenCalled();
      expect(secondCallback).not.toHaveBeenCalled();
    });
  });
