'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it(`should call first 'callback' when condition is 'true'`, () => {
    const condition = () => true;

    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).toHaveBeenCalled();
    expect(secondCallback).not.toHaveBeenCalled();
  });

  it(`should call second 'callback' when condition is 'false'`, () => {
    const condition = () => false;

    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    ifElse(condition, firstCallback, secondCallback);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalled();
  });
});
