'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let condition;
  let first;
  let second;

  beforeEach(() => {
    first = jest.fn(() => 1);
    second = jest.fn(() => 2);
  });

  it('should call condition', () => {
    condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
  });

  it('should call the first callback when the condition is true', () => {
    condition = () => true;

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second callback when the condition is false', () => {
    condition = () => false;

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledWith();
  });
});
