'use strict';

describe('ifElse', () => {
 const { ifElse } = require('./ifElse');

 it('should run the first callback if condition returns true', () => {
  const condition = jest.fn(() => true);
  const firstCallback = jest.fn();

  ifElse(condition, firstCallback, () => {});

  expect(condition).toHaveBeenCalled();
  expect(firstCallback).toHaveBeenCalled();
});

it('should run the second callback if condition returns false', () => {
  const condition = jest.fn(() => false);
  const secondCallback = jest.fn();

  ifElse(condition, () => {}, secondCallback);

  expect(condition).toHaveBeenCalled();
  expect(secondCallback).toHaveBeenCalled();
});
});