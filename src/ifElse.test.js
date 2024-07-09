'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  const f = (str) => str.length === 5;
  let name = 'Artem';
  const condition = jest.fn(() => f(name));
  const first = jest.fn(() => {
    return 'Zakharchuk';
  });
  const second = jest.fn(() => {
    return 'Kovaliv';
  });

  beforeAll(() => {
    ifElse(condition, first, second);
  });

  it('should be declared', () => {
    expect(ifElse).toBeInstanceOf(Function);
  });

  it('should be truthy', () => {
    expect(condition).toHaveReturnedWith(true);
  });

  it('should return "Zakharchuk" if condition is truthy', () => {
    expect(first).toHaveBeenCalled();
    expect(first).toHaveReturnedWith('Zakharchuk');
  });

  it('should not been invoked', () => {
    expect(second).not.toHaveBeenCalled();
  });

  it('should called second function if condition changes', () => {
    name = 'Volodymyr';

    ifElse(condition, first, second);

    expect(second).toHaveReturnedWith('Kovaliv');
  });
});
