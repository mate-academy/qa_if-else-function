'use strict';

const { ifElse } = require("./ifElse");

describe('ifElse', () => {

  it('condition = true -> run first callback', () => {
    const condition = ()=> true;

    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second)

    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('condition = false -> run second callback', () => {
    const condition = ()=> false;

    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second)

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });
});
