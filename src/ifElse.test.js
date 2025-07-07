'use strict';

const { ifElse } = require("./ifElse");

describe('ifElse', () => {
  // const { ifElse } = require('./ifElse');

  it('should call first if condition is true ', () => {
    const condition = () => true;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second)

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();

  });
    it('should call second if condition is false ', () => {
    const condition = () => false;
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second)

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();

  });

  
});
