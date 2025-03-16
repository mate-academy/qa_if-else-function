const ifElse = require('./ifElse');

describe('ifElse function', () => {
  it('should call the first callback when the condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it('should call the second callback when the condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
  });

  it('should not return any value', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    const result = ifElse(condition, first, second);

    expect(result).toBeUndefined();
  });

  it('should handle when condition is random', () => {
    const condition = jest.fn(() => Math.random() > 0.5);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    // We cannot assert on first or second being called since it's random,
    // but we can assert that one of them is called.
    expect(first.mock.calls.length + second.mock.calls.length).toBe(1);
  });
});
