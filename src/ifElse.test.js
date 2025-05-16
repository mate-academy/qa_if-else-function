'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should use first cb if condition is true', () => {
    const firstCb = jest.fn(() => 'first');
    const secondCb = jest.fn(() => 'second');
    const condition = jest.fn(() => true);

    ifElse(condition, firstCb, secondCb);

    expect(firstCb).toHaveBeenCalled();
    expect(secondCb).not.toHaveBeenCalled();
  });

  it('should use the second cb if condition is false', () => {
    const firstCb = jest.fn(() => 'first');
    const secondCb = jest.fn(() => 'second');
    const condition = jest.fn(() => false);

    ifElse(condition, firstCb, secondCb);

    expect(firstCb).not.toHaveBeenCalled();
    expect(secondCb).toHaveBeenCalled();
  });
});
