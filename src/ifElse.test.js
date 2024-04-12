'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let mockFirst;
  let mockSecond;

  beforeEach(() => {
    mockFirst = jest.fn();
    mockSecond = jest.fn();
  });

  it(`should be a function`, () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it(`should call first callback if 'condition()' === true`, () => {
    const mockFuncCondition = jest.fn(() => true);

    ifElse(mockFuncCondition, mockFirst, mockSecond);

    expect(mockFirst.mock.calls.length).toBe(1);
    expect(mockSecond.mock.calls.length).toBe(0);
  });

  it(`should call second callback if 'condition()' === false`, () => {
    const mockFuncCondition = jest.fn(() => false);

    ifElse(mockFuncCondition, mockFirst, mockSecond);

    expect(mockFirst.mock.calls.length).toBe(0);
    expect(mockSecond.mock.calls.length).toBe(1);
  });
});
