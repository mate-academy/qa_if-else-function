/* eslint-disable max-len */
'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');

  it('should ', () => {});

  // write tests here
  it('should return the result of the first function if the condition is true', () => {
    const condition = () => true;
    const onTrue = jest.fn(() => 'true result');
    const onFalse = jest.fn(() => 'false result');

    ifElse(condition, onTrue, onFalse);
    expect(onTrue).toHaveBeenCalled();
    expect(onFalse).not.toHaveBeenCalled();
  });

  it('should return the result of the second function if the condition is false', () => {
    const condition = () => false;
    const onTrue = jest.fn(() => 'true result');
    const onFalse = jest.fn(() => 'false result');

    ifElse(condition, onTrue, onFalse);
    expect(onTrue).not.toHaveBeenCalled();
    expect(onFalse).toHaveBeenCalled();
  });
});
