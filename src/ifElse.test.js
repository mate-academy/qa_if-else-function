'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should return undefined', () => {
    expect(ifElse(() => {}, () => {}, () => {})).toBeUndefined();
  });

  it('should call condition with no arguments', () => {
    const conditionFunc = jest.fn(() => true);

    ifElse(conditionFunc, () => {}, () => {});
    expect(conditionFunc).toHaveBeenCalled();
  });

  it('should run correct func depend of conditionFunc', () => {
    const results = [];
    const firstFunc = () => results.push('1Func');
    const secondFunc = () => results.push('2Func');
    const conditionFunc = jest.fn(() => false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false);

    ifElse(conditionFunc, firstFunc, secondFunc);
    ifElse(conditionFunc, firstFunc, secondFunc);
    ifElse(conditionFunc, firstFunc, secondFunc);
    ifElse(conditionFunc, firstFunc, secondFunc);
    ifElse(conditionFunc, firstFunc, secondFunc);
    ifElse(conditionFunc, firstFunc, secondFunc);

    expect(results)
      .toEqual(['1Func', '2Func', '1Func', '2Func', '2Func', '2Func']);
  });
});
