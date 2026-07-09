/* eslint-disable prettier/prettier */
'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  const mockCbArg = jest.fn();
  const mockCb = jest.fn().mockReturnValue(true);

  it('should condition return true and call first Cb', () => {
    expect(ifElse(mockCb, mockCbArg, () => {})).toBeUndefined();

    expect(mockCbArg).toHaveBeenCalled();
  });

  it('should condition return false and call second Cb', () => {
    expect(ifElse(mockCb, () => {}, mockCbArg)).toBeUndefined();

    expect(mockCbArg).toHaveBeenCalled();
  });
});
