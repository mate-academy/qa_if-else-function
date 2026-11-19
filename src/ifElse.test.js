'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should ', () => {});

  it('correct result', () => {
    const condition = () => true;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('incorrect result', () => {
    const condition = () => false;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });
});
