'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  const mockCallback = jest.fn(() => true);
  const mockReturnsOne = jest.fn(() => 1);
  const mockReturnsTwo = jest.fn(() => 2);
  const spyOnIfElse = jest.spyOn(require('./ifElse'), 'ifElse');

  afterEach(() => {
    spyOnIfElse.mockReset();
  });

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should be called once', () => {
    ifElse(mockCallback, mockReturnsOne, mockReturnsTwo);

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('should call mockReturnsTwo if mockCallback is false', () => {
    mockCallback.mockReturnValue(false);
    ifElse(mockCallback, mockReturnsOne, mockReturnsTwo);
    expect(mockReturnsTwo).toBeCalled();
  });

  it('should call mockReturnsOne if mockCallback is true', () => {
    ifElse(mockCallback, mockReturnsOne, mockReturnsTwo);
    expect(mockReturnsOne).toBeCalled();
  });

  it('should not return anything', () => {
    expect(ifElse(mockCallback, mockReturnsOne, mockReturnsTwo))
      .toBe(undefined);
  });

  it('should be called with 3 args', () => {
    spyOnIfElse(mockCallback, mockReturnsOne, mockReturnsTwo);

    expect(spyOnIfElse)
      .toHaveBeenCalledWith(mockCallback, mockReturnsOne, mockReturnsTwo);
  });
});
