'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  let condition;
  let firstCb;
  let secondCb;

  beforeEach(() => {
    condition = jest.fn();
    firstCb = jest.fn();
    secondCb = jest.fn();
  });

  it('should call the first callback when condition returns true', () => {
    condition.mockReturnValue(true);

    ifElse(condition, firstCb, secondCb);

    expect(firstCb).toHaveBeenCalled();
    expect(secondCb).not.toHaveBeenCalled();
  });

  it('should call the second callback when condition returns false', () => {
    condition.mockReturnValue(false);

    ifElse(condition, firstCb, secondCb);

    expect(firstCb).not.toHaveBeenCalled();
    expect(secondCb).toHaveBeenCalled();
  });

  it('should execute condition callback once without arguments', () => {
    condition.mockReturnValue(true);

    ifElse(condition, firstCb, secondCb);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(condition).toHaveBeenCalledWith();
  });

  it('should call the first callback once without any arguments', () => {
    condition.mockReturnValue(true);

    ifElse(condition, firstCb, secondCb);

    expect(firstCb).toHaveBeenCalledTimes(1);
    expect(firstCb).toHaveBeenCalledWith();
  });

  it('should call the second callback once without any arguments', () => {
    condition.mockReturnValue(false);

    ifElse(condition, firstCb, secondCb);

    expect(secondCb).toHaveBeenCalledTimes(1);
    expect(secondCb).toHaveBeenCalledWith();
  });

  it('should not return anything', () => {
    expect(
      ifElse(
        () => true,
        () => 'first',
        () => 'second',
      ),
    ).toBeUndefined();
  });
});
