'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('condition always called', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, () => {}, () => {});

    expect(condition).toHaveBeenCalled();
  });

  it(`call 'first' if 'condition' = true`, () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it(`call 'second' if 'condition' = false`, () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  }
  );

  // write tests here
});
