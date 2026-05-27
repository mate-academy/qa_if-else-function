'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  describe('if branch — condition() === true', () => {
    it('should call first() when condition returns true', () => {
      const condition = jest.fn(() => true);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(first).toHaveBeenCalledTimes(1);
    });

    it('should NOT call second() when condition returns true', () => {
      const condition = jest.fn(() => true);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(second).not.toHaveBeenCalled();
    });

    it('should call condition() exactly once with no arguments', () => {
      const condition = jest.fn(() => true);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(condition).toHaveBeenCalledTimes(1);
      expect(condition).toHaveBeenCalledWith();
    });
  });

  describe('else branch — condition() !== true', () => {
    it('should call second() when condition returns false', () => {
      const condition = jest.fn(() => false);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(second).toHaveBeenCalledTimes(1);
    });

    it('should NOT call first() when condition returns false', () => {
      const condition = jest.fn(() => false);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(first).not.toHaveBeenCalled();
    });

    it('should call second() when condition is 0 (not strict true)', () => {
      const condition = jest.fn(() => 0);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(second).toHaveBeenCalledTimes(1);
      expect(first).not.toHaveBeenCalled();
    });

    it('should call second() when condition returns null', () => {
      const condition = jest.fn(() => null);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(second).toHaveBeenCalledTimes(1);
      expect(first).not.toHaveBeenCalled();
    });

    it('should call second() when condition returns undefined', () => {
      const condition = jest.fn(() => undefined);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(second).toHaveBeenCalledTimes(1);
      expect(first).not.toHaveBeenCalled();
    });
  });

  describe('strict equality — truthy values are NOT true', () => {
    it('should call second() when condition is 1 (not strict true)', () => {
      const condition = jest.fn(() => 1);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(second).toHaveBeenCalledTimes(1);
      expect(first).not.toHaveBeenCalled();
    });

    it('should call second() when condition returns non-empty string', () => {
      const condition = jest.fn(() => 'true');
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(second).toHaveBeenCalledTimes(1);
      expect(first).not.toHaveBeenCalled();
    });

    it('should call second() when condition returns an object', () => {
      const condition = jest.fn(() => ({}));
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);

      expect(second).toHaveBeenCalledTimes(1);
      expect(first).not.toHaveBeenCalled();
    });
  });

  describe('return value', () => {
    it('should return undefined (no explicit return)', () => {
      const condition = jest.fn(() => true);
      const first = jest.fn();
      const second = jest.fn();

      const result = ifElse(condition, first, second);

      expect(result).toBeUndefined();
    });

    it('should return undefined when else branch is taken', () => {
      const condition = jest.fn(() => false);
      const first = jest.fn();
      const second = jest.fn();

      const result = ifElse(condition, first, second);

      expect(result).toBeUndefined();
    });
  });
});
