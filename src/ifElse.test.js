'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  let firstCallback;
  let secondCallback;

  beforeEach(() => {
    firstCallback = jest.fn();
    secondCallback = jest.fn();
  });

  it('should call first callback', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it('should call second callback', () => {
    const condition = jest.fn(() => false);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition).toHaveBeenCalled();
    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
