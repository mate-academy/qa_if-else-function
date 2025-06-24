'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should call a first callback if condition returns true', () => {
    const condition = () => {
      return true;
    };

    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first.mock.calls.length).toBe(1);
  });

  it('should not call a first callback if condition returns false', () => {
    const condition = () => {
      return false;
    };

    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(first.mock.calls.length).toBe(0);
  });

  it('should call a second callback if condition returns false', () => {
    const condition = () => {
      return false;
    };

    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second.mock.calls.length).toBe(1);
  });

  it('should not call a second callback if condition returns true', () => {
    const condition = () => {
      return true;
    };

    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(second.mock.calls.length).toBe(0);
  });
});
