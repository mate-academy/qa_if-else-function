'use strict';

const { ifElse } = require('./ifElse');

test('calls condition callback', () => {
  const condition = jest.fn(() => true);
  const first = jest.fn();
  const second = jest.fn();

  ifElse(condition, first, second);

  expect(condition).toHaveBeenCalledWith();
});

test('calls first callback when condition returns true', () => {
  const condition = jest.fn(() => true);
  const first = jest.fn();
  const second = jest.fn();

  ifElse(condition, first, second);

  expect(first).toHaveBeenCalledWith();
  expect(second).not.toHaveBeenCalled();
});

test('calls second callback when condition returns false', () => {
  const condition = jest.fn(() => false);
  const first = jest.fn();
  const second = jest.fn();

  ifElse(condition, first, second);

  expect(second).toHaveBeenCalledWith();
  expect(first).not.toHaveBeenCalled();
});

test('calls second callback when condition returns a truthy value other than true', () => {
  const condition = jest.fn(() => 1); // truthy but not true
  const first = jest.fn();
  const second = jest.fn();

  ifElse(condition, first, second);

  expect(second).toHaveBeenCalledWith();
  expect(first).not.toHaveBeenCalled();
});

test('returns nothing', () => {
  const condition = jest.fn(() => false);
  const first = jest.fn();
  const second = jest.fn();

  const result = ifElse(condition, first, second);

  expect(result).toBeUndefined();
});
