'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  
  
    it('should call first if condition returns true', () => {
      const condition = jest.fn().mockReturnValue(true);
      const first = jest.fn();
      const second = jest.fn();
  
      ifElse(condition, first, second);
  
      expect(condition).toHaveBeenCalled();
      expect(first).toHaveBeenCalled();
      expect(second).not.toHaveBeenCalled();
    });
  
    it('should call second if condition returns false', () => {
      const condition = jest.fn().mockReturnValue(false);
      const first = jest.fn();
      const second = jest.fn();

      ifElse(condition, first, second);
  
      expect(condition).toHaveBeenCalled();
      expect(first).not.toHaveBeenCalled();
      expect(second).toHaveBeenCalled();
    });

    it('should not call first or second if condition returns undefined', () => {
      const condition = jest.fn().mockReturnValue(undefined);
      const first = jest.fn();
      const second = jest.fn();
  
      ifElse(condition, first, second);
  
      expect(condition).toHaveBeenCalled();
      expect(first).not.toHaveBeenCalled();
      expect(second).toHaveBeenCalled();
    });

    it('should call condition only once', () => {
      const condition = jest.fn().mockReturnValue(true);
      const first = jest.fn();
      const second = jest.fn();
  
      ifElse(condition, first, second);
      ifElse(condition, first, second);
  
      expect(condition).toHaveBeenCalledTimes(2);
    });
  });
