'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should return first cb if condition true', () => {
    const mockCondition = jest.fn(() => 0.5 < 1);
    const mockFirstCond = jest.fn(() => {});
    const mockSecondCond = jest.fn(() => {});

    ifElse(mockCondition, mockFirstCond, mockSecondCond);

    expect(mockCondition.mock.calls).toHaveLength(1);
    expect(mockFirstCond.mock.calls).toHaveLength(1);
    expect(mockSecondCond.mock.calls).toHaveLength(0);
  });

  it('should return second cb if condition false', () => {
    const mockCondition = jest.fn(() => 0.5 < 0.2);
    const mockFirstCond = jest.fn(() => {});
    const mockSecondCond = jest.fn(() => {});

    ifElse(mockCondition, mockFirstCond, mockSecondCond);

    expect(mockCondition.mock.calls).toHaveLength(1);
    expect(mockFirstCond.mock.calls).toHaveLength(0);
    expect(mockSecondCond.mock.calls).toHaveLength(1);
  });
});
