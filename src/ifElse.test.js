'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should call the first callback if the condition returns true', () => {
    
    const condition = jest.fn().mockReturnValue(true);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    
    ifElse(condition, firstCallback, secondCallback);

    
    expect(condition).toHaveBeenCalled();
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call the second callback if the condition returns false', () => {
    
    const condition = jest.fn().mockReturnValue(false);
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    
    ifElse(condition, firstCallback, secondCallback);

    
    expect(condition).toHaveBeenCalled();
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
