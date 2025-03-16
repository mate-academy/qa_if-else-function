'use strict';

const { ifElse } = require("./ifElse");

describe('ifElse', () => {
  // const { ifElse } = require('./ifElse');

  it('should ', () => {

  });

  // write tests here
  it('should call first(), if condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();
     ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second(), if condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();
    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should treat non-true condition as false', () => {
    const condition = jest.fn(() => 0);
    const first = jest.fn();
    const second = jest.fn();
    ifElse(condition, first, second);
  
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should propagate error if condition throws', () => {
    const condition = jest.fn(() => {
      throw new Error('Test error');
    });
    const first = jest.fn();
    const second = jest.fn();
  
    expect(() => {
      ifElse(condition, first, second);
    }).toThrow('Test error');
  
    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  test('should execute second() even if first() throws', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn(() => {
      throw new Error('First function error');
    });
    const second = jest.fn();
  
    ifElse(condition, first, second);
  
    expect(second).toHaveBeenCalled();
  });
  });

