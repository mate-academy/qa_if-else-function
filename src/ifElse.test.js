'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should always call condition once per function call'
    + ` for 3 times returning correct boolean values`, () => {
    const condition = jest.fn(() => {})
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);

    [1, 2, 3].forEach(() => ifElse(condition, jest.fn(), jest.fn()));

    expect(condition).toHaveBeenCalled();
    expect(condition).toHaveBeenCalledTimes(3);
    expect(condition.mock.calls).toHaveLength(3);

    expect(condition.mock.results.map(result => result.value))
      .toEqual([true, false, true]);
  });

  it('should call first once if true once with value 1'
    + 'should call second twice if false twice with value 2', () => {
    const condition = jest.fn(() => {})
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);
    const first = jest.fn(() => 1);
    const second = jest.fn(() => 2);

    [1, 2, 3].forEach(() => ifElse(condition, first, second));

    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first.mock.results[0].value).toBe(1);

    expect(second).toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(2);
    expect(second.mock.results[0].value).toBe(2);
    expect(second.mock.calls).toHaveLength(2);
  });
});
