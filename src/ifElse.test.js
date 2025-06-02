'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('calls first if condition returns true', () => {
    const condition = () => true;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('calls second if condition returns false', () => {
    const condition = () => false;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
  });
});
